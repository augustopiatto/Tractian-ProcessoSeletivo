import React from "react";

export interface UserInterface {
  companyId: number;
  email: string;
  id: number;
  name: string;
  unitId: number;
}

export interface CompanyInterface {
  id: number;
  name: string;
}

interface HealthHistory {
  status: string;
  timestamp: string;
}

export interface Metrics {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export interface Specifications {
  maxTemp: number;
  power?: number;
  rpm?: number | null;
}

export interface AssetInterface {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: HealthHistory[];
  healthscore: number;
  id: number;
  image: string;
  metrics: Metrics;
  model: string;
  name: string;
  sensors: string[];
  specifications: Specifications;
  status: string;
  unitId: number;
}

export interface UnitInterface {
  companyId: number;
  id: number;
  name: string;
}

export interface Checklist {
  completed: boolean;
  task: string;
}

export interface WorkorderInterface {
  assetId: number;
  assignedUserIds: number[];
  checklist: Checklist[];
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface ReactNodeInterface {
  children: React.ReactNode;
}
