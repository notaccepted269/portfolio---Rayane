import type { CommandHandler, RegisteredCommand } from "../types/index.ts";

export class CommandRegistry {
  private readonly commands = new Map<string, RegisteredCommand>();

  register(name: string, description: string, handler: CommandHandler): void {
    this.commands.set(name.toLowerCase(), { description, handler });
  }

  resolve(name: string): RegisteredCommand | undefined {
    return this.commands.get(name.toLowerCase());
  }

  getNames(): string[] {
    return [...this.commands.keys()];
  }

  getAll(): Map<string, RegisteredCommand> {
    return this.commands;
  }
}
