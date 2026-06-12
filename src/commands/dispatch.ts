import { esc } from "../utils.ts";
import { Terminal } from "../core/Terminal.ts";
import { HistoryManager } from "../core/HistoryManager.ts";
import { CommandRegistry } from "../core/CommandRegistry.ts";
import { cmdWhoami } from "./whoami.ts";
import { cmdProjects } from "./projects.ts";
import { cmdExperience } from "./experience.ts";
import { cmdStack } from "./stack.ts";
import { cmdContact } from "./contact.ts";
import { cmdTree } from "./tree.ts";
import { cmdHelp } from "./help.ts";
import { cmdLs, cmdSudo, cmdCat } from "./system.ts";
import { CFG } from "../config.ts";

// Sections qui activent la mise en surbrillance dans la sidebar
const SECTION_CMDS = new Set([
  "whoami",
  "projects",
  "experience",
  "stack",
  "contact",
]);

function setActive(cmd: string): void {
  document.querySelectorAll<HTMLElement>(".tn").forEach((el) => {
    el.classList.toggle("act", el.dataset.cmd === cmd);
  });
}

export function buildRegistry(history: HistoryManager): CommandRegistry {
  const r = new CommandRegistry();

  r.register("whoami", "Profile & system info", () => cmdWhoami());
  r.register("projects", "Browse completed projects", () => cmdProjects());
  r.register("experience", "Career timeline", () => cmdExperience());
  r.register("stack", "Technology tree", () => cmdStack());
  r.register("contact", "Get in touch", () => cmdContact());
  r.register("tree", "Filesystem overview", () => cmdTree());
  r.register("help", "List available commands", () => cmdHelp(r));
  r.register("ls", "List directory contents", (args) => cmdLs(args));
  r.register("sudo", "Elevated privileges", (args) => cmdSudo(args));
  r.register("cat", "Read file contents", (args) => cmdCat(args));
  r.register("history", "Command history", () => {
    const all = history.getAll();
    if (!all.length) return `<span class="dim sm">No history.</span>`;
    return all
      .map(
        (c, i) => `<div class="sm dim">
        <span style="min-width:20px;display:inline-block">${i + 1}</span>  ${esc(c)}
      </div>`,
      )
      .join("");
  });

  return r;
}

export function dispatch(
  raw: string,
  registry: CommandRegistry,
  terminal: Terminal,
  history: HistoryManager,
): void {
  const input = raw.trim();
  if (!input) return;

  history.push(input);
  terminal.push(terminal.promptLine(input));

  const [cmd, ...rest] = input.split(/\s+/);
  const args = rest.join(" ");
  const cmdLower = cmd.toLowerCase();

  if (SECTION_CMDS.has(cmdLower)) setActive(cmdLower);

  if (cmdLower === "clear") {
    terminal.clear();
    setTimeout(() => {
      setActive("whoami");
      terminal.push(terminal.promptLine("whoami"));
      terminal.push(cmdWhoami());
    }, 80);
    return;
  }

  if (cmdLower === "uname") {
    terminal.push(
      `<span class="w sm">KERNEL 2.0 — ${esc(CFG.name)}'s Personal Edition</span>`,
    );
    return;
  }

  const registered = registry.resolve(cmdLower);
  if (registered) {
    const result = registered.handler(args);
    if (result) terminal.push(result);
    return;
  }

  terminal.push(`
    <span class="re sm">bash: ${esc(cmd)}: command not found</span>
    <div class="dim xs" style="margin-top:3px">Try <span class="g">help</span></div>
  `);
}
