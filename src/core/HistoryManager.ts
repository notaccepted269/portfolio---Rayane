export class HistoryManager {
  private entries: string[] = [];
  private cursor: number = -1;

  push(cmd: string): void {
    this.entries.push(cmd);
    this.cursor = -1;
  }

  /** ↑ — remonte dans l'historique */
  up(): string | null {
    if (!this.entries.length) return null;
    this.cursor = Math.min(this.cursor + 1, this.entries.length - 1);
    return this.entries[this.entries.length - 1 - this.cursor];
  }

  /** ↓ — descend dans l'historique */
  down(): string | null {
    this.cursor = Math.max(this.cursor - 1, -1);
    if (this.cursor === -1) return "";
    return this.entries[this.entries.length - 1 - this.cursor];
  }

  getAll(): string[] {
    return [...this.entries];
  }
}
