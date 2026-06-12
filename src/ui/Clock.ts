export class Clock {
  private el: HTMLElement;
  private intervalId: number | null = null;

  constructor(el: HTMLElement) {
    this.el = el;
  }

  start(): void {
    this.tick();
    this.intervalId = window.setInterval(() => this.tick(), 1000);
  }

  stop(): void {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private tick(): void {
    this.el.textContent = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
}
