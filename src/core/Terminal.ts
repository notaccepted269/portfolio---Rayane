import { esc } from "../utils.ts";

export class Terminal {
  readonly el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
    this.setupDelegation();
  }

  /** Ajoute un bloc HTML animé en bas du terminal */
  push(html: string): void {
    const block = document.createElement("div");
    block.className = "ob";
    block.innerHTML = html;
    this.el.appendChild(block);
    this.el.scrollTop = this.el.scrollHeight;
  }

  /** Vide le terminal */
  clear(): void {
    this.el.innerHTML = "";
  }

  /** Génère la ligne de prompt affichée avant chaque commande */
  promptLine(cmd: string): string {
    return `<div class="pl">
      <span class="pu">rayane@portfolio</span>
      <span class="ps">:</span>
      <span class="pp">~</span>
      <span class="dl g">$</span>
      <span class="pc">${esc(cmd)}</span>
    </div>`;
  }

  /** Toggle l'accordéon stack — appelé depuis le HTML généré via data-sk-target */
  toggleStack(id: string): void {
    const items = document.getElementById(id);
    const arrow = document.getElementById("arr" + id);
    if (!items) return;
    const isOpen = items.classList.toggle("open");
    arrow?.classList.toggle("open", isOpen);
  }

  /** Gestion centralisée des clics sur le terminal (pas d'onclick inline) */
  private setupDelegation(): void {
    this.el.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      // Clic sur un item de stack → toggle accordéon
      const skCh = target.closest<HTMLElement>(".sk-ch");
      if (skCh?.dataset.skTarget) {
        this.toggleStack(skCh.dataset.skTarget);
        return;
      }

      // Clic sur un item de contact → action associée
      const ci = target.closest<HTMLElement>(".ci");
      if (ci?.dataset.action) {
        this.handleContactAction(ci);
        return;
      }
    });
  }

  private handleContactAction(el: HTMLElement): void {
    const action = el.dataset.action;
    const value = el.dataset.value ?? "";

    if (action === "copy") {
      navigator.clipboard
        .writeText(value)
        .then(() =>
          this.push(`<span class="g sm">✓ Copié : ${esc(value)}</span>`),
        )
        .catch(() => this.push(`<span class="a sm">${esc(value)}</span>`));
    }

    if (action === "link") {
      window.open(value, "_blank");
    }

    if (action === "cv") {
      if (value) {
        const a = document.createElement("a");
        a.href = value;
        a.download = "rayane_cv.pdf";
        a.click();
      } else {
        this.push(`<span class="a2 sm">⚠ CFG.cv_url non défini.</span>`);
      }
    }
  }
}
