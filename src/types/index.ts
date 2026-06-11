export interface ProfileConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv_url: string;
  kernel: string;
  shell: string;
  uptime: string;
  projects_n: string;
  status: string;
  education: string;
  languages: string;
  github_h: string;
  open_to: string;
}

export interface Project {
  type: string;
  name: string;
  desc: string;
  stack: string[];
  stat: string;
}

export interface ExperienceEntry {
  year: string;
  title: string;
  org: string;
  logs: string[];
  tags: string[];
}

export interface StackCategory {
  name: string;
  items: string[];
}

export type CommandHandler = (args: string) => string | null;

export interface RegisteredCommand {
  description: string;
  handler: CommandHandler;
}
