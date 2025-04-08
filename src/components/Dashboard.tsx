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
import ChartSkeleton from "@/components/ChartSkeleton";

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
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading finish after component mount
  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  });

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {/* <Card className="w-full lg:w-3/4 xl:w-11/12 ">
       */}
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
        <CardContent className="mx-auto">
          {isLoading ? (
            <ChartSkeleton chartType={countryChartType} />
          ) : (
            <CountryTrafficChart
              chartType={countryChartType}
              data={countryTraffic}
            />
          )}
        </CardContent>
      </Card>

      {/* <Card className="w-full lg:w-3/4 xl:w-11/12"> */}
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
        <CardContent className="mx-auto">
          {isLoading ? (
            <ChartSkeleton chartType={vehicleChartType} />
          ) : (
            <VehicleTypeChart
              chartType={vehicleChartType}
              data={vehicleTraffic}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
