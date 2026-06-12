import { esc } from "../utils.ts";
import { CFG } from "../config.ts";

export function cmdContact(): string {
  return `<div class="dim sm" style="margin-bottom:10px">
    Communication interfaces
  </div>
  <div class="cg">
    <div class="ci" data-action="copy" data-value="${esc(CFG.email)}">
      <span class="ci-icon">✉</span>
      <span class="ci-lbl">Email</span>
      <span class="ci-val">${esc(CFG.email)}</span>
      <span class="dim xs" style="margin-left:auto">click to copy</span>
    </div>
    <div class="ci" data-action="link" data-value="${esc(CFG.github)}">
      <span class="ci-icon">◈</span>
      <span class="ci-lbl">GitHub</span>
      <span class="ci-val">${esc(CFG.github_h)}</span>
    </div>
    <div class="ci" data-action="link" data-value="${esc(CFG.linkedin)}">
      <span class="ci-icon">⌘</span>
      <span class="ci-lbl">LinkedIn</span>
      <span class="ci-val">linkedin.com/in/${esc(CFG.name.toLowerCase())}</span>
    </div>
    <div class="ci" data-action="cv" data-value="${esc(CFG.cv_url)}">
      <span class="ci-icon">↓</span>
      <span class="ci-lbl">CV</span>
      <span class="ci-val">${esc(CFG.name.toLowerCase())}_cv.pdf</span>
    </div>
  </div>
  <div class="dim xs mt8">
    Open to: <span class="a">${esc(CFG.open_to)}</span>
    &nbsp;·&nbsp; Response time <span class="g">&lt; 24h</span>
  </div>`;
}
