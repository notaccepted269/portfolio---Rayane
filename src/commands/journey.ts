import { esc } from "../utils.ts";
import { JOURNEY } from "../config.ts";

export function cmdJourney(): string {
  const entries = JOURNEY.map((e) => {
    const logs = e.logs
      .map((l) => `<div class="exp-log">${esc(l)}</div>`)
      .join("");
    const tags = e.tags
      .map((t) => `<span class="exp-tag">${esc(t)}</span>`)
      .join("");
    return `<div class="exp-entry">
      <div class="exp-h">
        <span class="exp-year">${esc(e.year)}</span>
        <span class="exp-title">${esc(e.title)}</span>
        <span class="exp-org">— ${esc(e.org)}</span>
      </div>
      ${logs}
      <div class="exp-tags">${tags}</div>
    </div>`;
  }).join("");

  return `<div class="dim sm" style="margin-bottom:10px">
    <span class="a">/var/log/journey.log</span>
  </div>
  ${entries}
  <div class="dim xs mt6">-- END OF LOG --</div>`;
}
