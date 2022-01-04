export type Description = string;

export type Work = {
  id: number;
  name: string;
  startedAt: string;
  endedAt: string;
  period: string;
  description: string;
};

export type OutsideOfWork = string;

export type Contact = string;

export type Works = Work[];
