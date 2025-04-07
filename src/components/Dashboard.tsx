"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountryTrafficChart from "@/components/CountryTrafficChart";
import VehicleTypeChart from "@/components/VehicleTypeChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrafficSummary } from "@/types/traffic";

interface DashboardProps {
  countryTraffic: TrafficSummary[];
  vehicleTraffic: TrafficSummary[];
}

export default function Dashboard({
  countryTraffic,
  vehicleTraffic,
}: DashboardProps) {
  const [countryChartType, setCountryChartType] = useState("bar");
  const [vehicleChartType, setVehicleChartType] = useState("bar");

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Country-wise Traffic</CardTitle>
            <CardDescription>Traffic distribution by country</CardDescription>
          </div>
          <Select value={countryChartType} onValueChange={setCountryChartType}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="pie">Pie Chart</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <CountryTrafficChart
            chartType={countryChartType}
            data={countryTraffic}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Vehicle Type Distribution</CardTitle>
            <CardDescription>Traffic by vehicle type</CardDescription>
          </div>
          <Select value={vehicleChartType} onValueChange={setVehicleChartType}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="pie">Pie Chart</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <VehicleTypeChart
            chartType={vehicleChartType}
            data={vehicleTraffic}
          />
        </CardContent>
      </Card>
    </div>
  );
}
