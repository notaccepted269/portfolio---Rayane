export function cmdTree(): string {
  return `<div class="to">
    <div class="tl"><span class="a bold">.</span></div>
    <div class="tl"><span class="tc2">├──</span> <span class="tdir">whoami/</span></div>
    <div class="tl"><span class="tc2">├──</span> <span class="tdir">projects/</span></div>
    <div class="tl"><span class="tc2">│   ├──</span> <span class="tdir">SaaS/</span></div>
    <div class="tl"><span class="tc2">│   ├──</span> <span class="tdir">IA/</span></div>
    <div class="tl"><span class="tc2">│   ├──</span> <span class="tdir">Open Source/</span></div>
    <div class="tl"><span class="tc2">│   └──</span> <span class="tdir">Clients/</span></div>
    <div class="tl"><span class="tc2">├──</span> <span class="tdir">experience/</span></div>
    <div class="tl"><span class="tc2">│   └──</span> <span class="tfil">experience.log</span></div>
    <div class="tl"><span class="tc2">├──</span> <span class="tdir">stack/</span></div>
    <div class="tl"><span class="tc2">└──</span> <span class="tdir">contact/</span></div>
  </div>
  <div class="dim xs mt6">5 directories</div>`;
}
