// src/ui/Sidebar.ts
import { esc } from "../utils.ts";
import type { CommandRegistry } from "../core/CommandRegistry.ts";
import type { Terminal } from "../core/Terminal.ts";
import type { HistoryManager } from "../core/HistoryManager.ts";
import { dispatch } from "../commands/dispatch.ts";

interface SidebarNode {
  lbl: string;
  ico: string;
  cmd: string;
  ch?: string[];
  badge?: string;
}

const NODES: SidebarNode[] = [
  { lbl: "whoami", ico: "👤", cmd: "whoami" },
  {
    lbl: "projects",
    ico: "📁",
    cmd: "projects",
    ch: [
      "Systems & Software",
      "Web & Data",
      "Security",
      "Language Engineering",
    ],
    badge: "6",
  },
  { lbl: "journey", ico: "📋", cmd: "journey" },
  {
    lbl: "stack",
    ico: "⚙",
    cmd: "stack",
    //ch: ["Langages", "Frontend", "Backend", "DevOps"],
  },
  { lbl: "contact", ico: "✉", cmd: "contact" },
];

export class Sidebar {
  private el: HTMLElement;
  private registry: CommandRegistry;
  private terminal: Terminal;
  private history: HistoryManager;

  constructor(
    el: HTMLElement,
    registry: CommandRegistry,
    terminal: Terminal,
    history: HistoryManager,
  ) {
    this.el = el;
    this.registry = registry;
    this.terminal = terminal;
    this.history = history;
  }

  render(): void {
    const ftree = this.el.querySelector<HTMLElement>("#ftree");
    if (!ftree) return;

    ftree.innerHTML = NODES.map((node, i) => {
      const hasCh = !!node.ch?.length;
      const ftcId = `ftc${i}`;
      const badge = node.badge
        ? `<span class="badge">${node.badge}</span>`
        : "";

      const children = hasCh
        ? node
            .ch!.map(
              (c) =>
                `<div class="tch" data-cmd="${esc(node.cmd)}">${esc(c)}</div>`,
            )
            .join("")
        : "";

      const arrow = hasCh
        ? `<span class="arr">▶</span>`
        : `<span style="width:9px;display:inline-block"></span>`;

      return `
        <div class="tn"
          data-cmd="${esc(node.cmd)}"
          ${hasCh ? `data-ftc="${ftcId}"` : ""}
        >
          ${arrow}
          <span class="ico d">${node.ico}</span>
          <span>${esc(node.lbl)}${hasCh ? "/" : ""}</span>
          ${badge}
        </div>
        ${hasCh ? `<div class="tc" id="${ftcId}">${children}</div>` : ""}
      `;
    }).join("");

    this.setupDelegation();
  }

  private setupDelegation(): void {
    const ftree = this.el.querySelector<HTMLElement>("#ftree");
    if (!ftree) return;

    ftree.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      // Clic sur un enfant → lance la commande parente
      const tch = target.closest<HTMLElement>(".tch");
      if (tch?.dataset.cmd) {
        dispatch(tch.dataset.cmd, this.registry, this.terminal, this.history);
        return;
      }

      // Clic sur un nœud principal
      const tn = target.closest<HTMLElement>(".tn");
      if (!tn) return;

      // Si nœud avec enfants → toggle accordéon
      if (tn.dataset.ftc) {
        this.toggleNode(tn);
        return;
      }

      // Sinon → lancer la commande
      if (tn.dataset.cmd) {
        dispatch(tn.dataset.cmd, this.registry, this.terminal, this.history);
      }
    });
  }

  private toggleNode(tn: HTMLElement): void {
    const ftcId = tn.dataset.ftc!;
    const panel = document.getElementById(ftcId);
    if (!panel) return;

    const isOpen = panel.classList.toggle("open");
    tn.classList.toggle("open", isOpen);
  }
}
