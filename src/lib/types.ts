export type Eligibility = "global" | "us-only" | "unknown";
export type TriageStatus = "new" | "saved" | "dismissed";
export type AppStage = "drafted" | "applied" | "interviewing" | "offer" | "rejected";

export type Job = {
  id: string;
  source: string;
  title: string;
  company: string;
  location: string;
  url: string;
  description: string;
  tags: string[] | null;
  postedAt: string;
  score: number;
  reason: string;
  eligibility: Eligibility;
  yc: boolean;
  ycBatch: string;
  funded: boolean;
  newlyFunded: boolean;
  internship: boolean;
  status: TriageStatus;
  discoveredAt: string;
};

export type Application = {
  jobId: string;
  stage: AppStage;
  resumeHighlights: string;
  coverEmail: string;
  pitch: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};
