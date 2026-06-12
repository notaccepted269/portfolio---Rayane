import type { CommandRegistry } from '../core/CommandRegistry.ts'

export function cmdHelp(registry: CommandRegistry): string {
  const rows = [...registry.getAll().entries()]
    .map(([name, cmd]) => `<tr>
      <td class="hc">${name}</td>
      <td class="hd">${cmd.description}</td>
    </tr>`)
    .join('')

  return `<div class="a sm bold" style="margin-bottom:6px">KERNEL v2.0 — Commands</div>
  <div class="hr"></div>
  <table class="ht">${rows}</table>
  <div class="hr"></div>
  <span class="dim xs">Some files are hidden — try <span class="a">ls -a</span></span>`
}