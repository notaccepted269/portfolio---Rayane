import { esc } from "../utils.ts";
import { STACK } from "../config.ts";

export function cmdStack(): string {
  const total = STACK.reduce((acc, cat) => acc + cat.items.length, 0);

  const categories = STACK.map((cat, i) => {
    const isLast = i === STACK.length - 1;
    const con = isLast ? "└──" : "├──";
    const id = `sk${i}`;

    const items = cat.items
      .map((item, j) => {
        const prefix = j === cat.items.length - 1 ? "└── " : "├── ";
        return `<div class="sk-item">
        <span class="con">${prefix}</span>${esc(item)}
      </div>`;
      })
      .join("");

    return `<div class="sk-cat">
      <div class="sk-ch" data-sk-target="${id}">
        <span class="sk-con dim">${con}</span>
        <span class="sk-arr dim" id="arr${id}">▶</span>
        <span class="sk-name">📂 ${esc(cat.name)}/</span>
        <span class="dim xs" style="margin-left:4px">${cat.items.length}</span>
      </div>
      <div class="sk-items" id="${id}">${items}</div>
    </div>`;
  }).join("");

  return `<div class="dim sm" style="margin-bottom:8px">
    <span class="a">~/expertise</span> — ${total} technologies
  </div>
  ${categories}`;
}
