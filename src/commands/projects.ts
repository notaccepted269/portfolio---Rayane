import { esc } from "../utils.ts";
import { PROJECTS } from "../config.ts";

export function cmdProjects(): string {
  const cards = PROJECTS.map((p) => {
    const tags = p.stack
      .map((t) => `<span class="tag">${esc(t)}</span>`)
      .join("");
    return `<div class="pc">
      <div class="pc-type">${esc(p.type)}</div>
      <div class="pc-name">📁 ${esc(p.name)}</div>
      <div class="pc-desc">${esc(p.desc)}</div>
      <div class="pc-footer">
        <div class="pc-tags">${tags}</div>
        <div class="pc-stat">${esc(p.stat)}</div>
      </div>
    </div>`;
  }).join("");

  return `<div class="dim sm" style="margin-bottom:10px">
    <span class="a">/projects</span> — ${PROJECTS.length} entries
  </div>
  <div class="pg">${cards}</div>`;
}
