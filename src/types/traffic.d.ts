export interface Traffic {
  id: number;
  country: string;
  vehicleType: string;
  count: number;
  createdAt: string;
}

export interface TrafficSummary {
  country?: string;
  vehicleType?: string;
  count: number;
}

export interface TrafficResponse {
  data: Traffic[];
}

export interface TrafficSummaryResponse {
  data: TrafficSummary[];
}
