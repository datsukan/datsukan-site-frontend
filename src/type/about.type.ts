export type Description = string;

export type Work = {
  name: string;
  startedAt: string;
  endedAt: string;
  period?: string;
  description: string;
};

export type Works = Work[];

export type TimelineItem = {
  id: number;
  type: string;
  name: string;
  startedAt?: string;
  endedAt?: string;
  period?: string;
  description?: string;
};

export type TimelineItems = TimelineItem[];

export type OutsideOfWork = string;

export type Contact = string;
