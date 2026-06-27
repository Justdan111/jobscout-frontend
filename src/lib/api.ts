import type { Application, Job, TriageStatus, AppStage } from "./types";

const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  listJobs: () => req<{ jobs: Job[] }>("/api/jobs"),
  setJobStatus: (id: string, status: TriageStatus) =>
    req<{ job: Job }>(`/api/jobs/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }),
  refresh: () => req<{ fetched: number; kept: number; added: number }>("/api/refresh", { method: "POST" }),
  draft: (id: string) =>
    req<{ application: Application }>(`/api/jobs/${id}/draft`, { method: "POST" }),
  listApplications: () => req<{ applications: Application[] }>("/api/applications"),
  updateApplication: (
    id: string,
    payload: Partial<{ stage: AppStage; notes: string; resumeHighlights: string; coverEmail: string; pitch: string }>
  ) => req<{ application: Application }>(`/api/applications/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
};
