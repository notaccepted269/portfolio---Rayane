// src/main.ts
import "./style.css";

import { CFG } from "./config.ts";
import { Terminal } from "./core/Terminal.ts";
import { HistoryManager } from "./core/HistoryManager.ts";
import { runBoot } from "./core/Boot.ts";
import { buildRegistry } from "./commands/dispatch.ts";
import { cmdWhoami } from "./commands/whoami.ts";
import { Sidebar } from "./ui/Sidebar.ts";
import { Clock } from "./ui/Clock.ts";
import { InputBar } from "./ui/InputBar.ts";

async function init(): Promise<void> {
  // — Instanciation du moteur
  const terminalEl = document.getElementById("terminal")!;
  const terminal = new Terminal(terminalEl);
  const history = new HistoryManager();
  const registry = buildRegistry(history);

  // — Horloge
  const clockEl = document.getElementById("clock")!;
  new Clock(clockEl).start();

  // — Sidebar
  const sidebarEl = document.getElementById("sidebar")!;
  new Sidebar(sidebarEl, registry, terminal, history).render();

  // — Input bar
  const inputEl = document.getElementById("cmdin") as HTMLInputElement;
  new InputBar(inputEl, registry, terminal, history).mount();

  // — Boot sequence
  await runBoot(CFG);

  // — Sidebar toggle (mobile)
  const btnSidebar = document.getElementById("btn-sidebar");
  const sidebarEl2 = document.getElementById("sidebar")!;
  btnSidebar?.addEventListener("click", () => {
    sidebarEl2.classList.toggle("open");
  });

  // Ferme la sidebar si on clique ailleurs sur mobile
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest("#sidebar") &&
      !target.closest("#btn-sidebar") &&
      window.innerWidth < 768
    ) {
      sidebarEl2.classList.remove("open");
    }
  });

  // — Affichage initial après le boot
  document.querySelectorAll<HTMLElement>(".tn").forEach((el) => {
    el.classList.toggle("act", el.dataset.cmd === "whoami");
  });
  terminal.push(terminal.promptLine("whoami"));
  terminal.push(cmdWhoami());

  inputEl.focus();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
