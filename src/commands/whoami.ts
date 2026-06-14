import { esc } from "../utils.ts";
import { CFG, PALETTE_COLORS } from "../config.ts";

const ART = ` ╭───────────────────────────────────────────────────╮
 │ ██████╗  █████╗ ██╗   ██╗ █████╗ ███╗   ██╗███████╗ │
 │ ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝ │
 │ ██████╔╝███████║ ╚████╔╝ ███████║██╔██╗ ██║█████╗   │
 │ ██╔══██╗██╔══██║  ╚██╔╝  ██╔══██║██║╚██╗██║██╔══╝   │
 │ ██║  ██║██║  ██║   ██║   ██║  ██║██║ ╚████║███████╗ │
 │ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝ │
 ╰───────────────────────────────────────────────────╯`;

export function cmdWhoami(): string {
  const swatches = PALETTE_COLORS.map(
    (c) => `<span class="nf-swatch" style="background:${c}"></span>`,
  ).join("");

  return `<div class="nf">
    <div class="nf-art">${esc(ART)}</div>
    <div class="nf-info">
      <div class="nf-login">${esc(CFG.name.toLowerCase())}<em>@portfolio</em></div>
      <div class="nf-sep">──────────────────────────────────────────</div>
      <div class="nf-row"><span class="nf-k">OS</span><span class="nf-v">KERNEL 2.0 — Personal Edition</span></div>
      <div class="nf-row"><span class="nf-k">Role</span><span class="nf-v">${esc(CFG.role)}</span></div>
      <div class="nf-row"><span class="nf-k">Education</span><span class="nf-v">${esc(CFG.education)}</span></div>
      <div class="nf-row"><span class="nf-k">Location</span><span class="nf-v">${esc(CFG.location)}</span></div>
      <div class="nf-row"><span class="nf-k">Kernel</span><span class="nf-v">${esc(CFG.kernel)}</span></div>
      <div class="nf-row"><span class="nf-k">Shell</span><span class="nf-v">${esc(CFG.shell)}</span></div>
      <div class="nf-row"><span class="nf-k">Languages</span><span class="nf-v">${esc(CFG.languages)}</span></div>
      <div class="nf-row"><span class="nf-k">Uptime</span><span class="nf-v">${esc(CFG.uptime)}</span></div>
      <div class="nf-row"><span class="nf-k">Projects</span><span class="nf-v">${esc(CFG.projects_n)} completed</span></div>
      <div class="nf-row"><span class="nf-k">GitHub</span><span class="nf-v">${esc(CFG.github_h)}</span></div>
      <div class="nf-row"><span class="nf-k">Status</span><span class="nf-v av">● ${esc(CFG.status)}</span></div>
      <div class="nf-row"><span class="nf-k">Open to</span><span class="nf-v">${esc(CFG.open_to)}</span></div>
      <div class="nf-palette">${swatches}</div>
    </div>
  </div>`;
}
