export class Job {
  url: string;
  healthReport?: HealthReport;
  builds?: Build[];
  lastBuild?: Build;
}

export class HealthReport {
  description: string;
  score: number;
}

export class Build {
  buildNumber: number;
  url: string;
}
