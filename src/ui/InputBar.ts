// src/ui/InputBar.ts
import type { Terminal } from "../core/Terminal.ts";
import type { HistoryManager } from "../core/HistoryManager.ts";
import type { CommandRegistry } from "../core/CommandRegistry.ts";
import { dispatch } from "../commands/dispatch.ts";

export class InputBar {
  private input: HTMLInputElement;
  private registry: CommandRegistry;
  private terminal: Terminal;
  private history: HistoryManager;

  constructor(
    input: HTMLInputElement,
    registry: CommandRegistry,
    terminal: Terminal,
    history: HistoryManager,
  ) {
    this.input = input;
    this.registry = registry;
    this.terminal = terminal;
    this.history = history;
  }

  mount(): void {
    this.input.addEventListener("keydown", (e) => this.handleKey(e));

    // Refocus à chaque clic sur la page
    document.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest(".ci")) return;
      this.input.focus();
    });

    this.input.focus();
  }

  private handleKey(e: KeyboardEvent): void {
    switch (e.key) {
      case "Enter": {
        const value = this.input.value;
        this.input.value = "";
        dispatch(value, this.registry, this.terminal, this.history);
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prev = this.history.up();
        if (prev !== null) this.input.value = prev;
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        const next = this.history.down();
        if (next !== null) this.input.value = next;
        break;
      }
      case "Tab": {
        e.preventDefault();
        this.autocomplete();
        break;
      }
    }
  }

  private autocomplete(): void {
    const val = this.input.value.toLowerCase();
    if (!val) return;
    const match = this.registry
      .getNames()
      .find((n) => n.startsWith(val) && n !== val);
    if (match) this.input.value = match;
  }
}
