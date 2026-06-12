import { esc } from "../utils.ts";
import { CFG } from "../config.ts";

export function cmdLs(args: string): string {
  const showHidden = args.includes("-a");
  const files = ["whoami/", "projects/", "experience/", "stack/", "contact/"];
  if (showHidden) files.push(".env.secret");

  const items = files
    .map((f) => {
      const cls = f.endsWith("/") ? "a" : f.startsWith(".") ? "re" : "w";
      return `<span class="${cls} sm">${esc(f)}</span>`;
    })
    .join("");

  return `<div style="display:flex;gap:20px;flex-wrap:wrap">${items}</div>`;
}

export function cmdSudo(args: string): string {
  if (args.trim() === "hire me") {
    return `<div class="sm" style="line-height:1.9">
      <span class="dim">[sudo] password for ${esc(CFG.name.toLowerCase())}: </span>
      <span class="gr">••••••••••</span>
      <br/>
      <span class="g">
        ✓ Authentication successful<br/>
        ✓ Initiating hire sequence...<br/>
        <br/>
        &nbsp; → Parsing candidate profile... &nbsp;[DONE]<br/>
        &nbsp; → Verifying skill tree... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[DONE]<br/>
        &nbsp; → Drafting offer letter... &nbsp;&nbsp;&nbsp;&nbsp;[DONE]<br/>
        &nbsp; → Scheduling interview... &nbsp;&nbsp;&nbsp;&nbsp;[DONE]<br/>
        <br/>
        &nbsp; Contact: </span><span class="a">${esc(CFG.email)}</span>
    </div>`;
  }
  return `<span class="re sm">sudo: ${esc(args)}: operation not permitted</span>`;
}

export function cmdCat(args: string): string {
  if (args.includes(".env")) {
    return `<div class="re sm" style="margin-bottom:5px">⚠ SENSITIVE DATA EXPOSED</div>
    <div class="sm" style="line-height:1.9">
      <span class="dim">MOTIVATION=</span><span class="g">intrinsic</span><br/>
      <span class="dim">COFFEE_DEPENDENCY=</span><span class="a">true</span><br/>
      <span class="dim">RECRUITER_SHOULD_HIRE=</span><span class="g">absolutely</span><br/>
      <span class="dim">SECRET_KEY=</span><span class="re">████████████████</span>
    </div>
    <div class="dim xs mt6">You shouldn't be here. Yet here you are.</div>`;
  }
  return `<span class="re sm">cat: ${esc(args)}: Permission denied</span>`;
}
