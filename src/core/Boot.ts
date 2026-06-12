import { sleep } from "../utils.ts";
import type { ProfileConfig } from "../types/index.ts";

interface BootLine {
  html: string;
  delay: number;
}

export async function runBoot(cfg: ProfileConfig): Promise<void> {
  const bootEl = document.getElementById("boot")!;
  const appEl = document.getElementById("app")!;

  const lines: BootLine[] = [
    {
      html: `<span class="a bold" style="font-size:14px">KERNEL v2.0</span>  <span class="dim">— Personal Edition</span>`,
      delay: 0,
    },
    {
      html: `<span class="dim">Copyright © ${cfg.name}. All rights reserved.</span>`,
      delay: 120,
    },
    { html: `&nbsp;`, delay: 180 },
    {
      html: `<span class="pr">rayane@portfolio:~$</span> <span class="hl">boot</span>`,
      delay: 380,
    },
    { html: `&nbsp;`, delay: 80 },
    {
      html: `<span class="dim">[0.001]</span>  Initializing KERNEL v2.0...`,
      delay: 260,
    },
    {
      html: `<span class="dim">[0.042]</span>  Loading profile...           <span class="ok">[ OK ]</span>`,
      delay: 200,
    },
    {
      html: `<span class="dim">[0.156]</span>  Loading projects...          <span class="ok">[ OK ]</span>`,
      delay: 170,
    },
    {
      html: `<span class="dim">[0.287]</span>  Loading journey log...       <span class="ok">[ OK ]</span>`,
      delay: 150,
    },
    {
      html: `<span class="dim">[0.401]</span>  Loading stack modules...     <span class="ok">[ OK ]</span>`,
      delay: 140,
    },
    { html: `<span class="dim">[0.512]</span>  Boot complete.`, delay: 260 },
    { html: `&nbsp;`, delay: 150 },
    {
      html: `<span class="pr">rayane@portfolio:~$</span> <span class="hl">whoami</span>`,
      delay: 460,
    },
  ];

  for (const line of lines) {
    await sleep(line.delay);
    const el = document.createElement("div");
    el.className = "bl";
    el.innerHTML = line.html;
    bootEl.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
  }

  await sleep(560);
  bootEl.classList.add("fade");
  appEl.classList.add("on");

  await sleep(400);
  bootEl.style.display = "none";
}
