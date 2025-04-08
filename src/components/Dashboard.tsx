"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountryTrafficChart from "@/components/CountryTrafficChart";
import VehicleTypeChart from "@/components/VehicleTypeChart";
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

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid gap-6 xl:grid-cols-2 w-full">
      <Card className="w-[90%] sm:w-[95%] xl:w-11/12 mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-base sm:text-lg">
              Country-wise Traffic
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Traffic distribution by country
            </CardDescription>
          </div>
          <Select value={countryChartType} onValueChange={setCountryChartType}>
            <SelectTrigger className="w-[100px] sm:w-[120px]">
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="pie">Pie Chart</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="h-[300px] sm:h-[340px]">
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

      <Card className="w-[90%] sm:w-[95%] xl:w-11/12 mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-base sm:text-lg">
              Vehicle Type Distribution
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Traffic by vehicle type
            </CardDescription>
          </div>
          <Select value={vehicleChartType} onValueChange={setVehicleChartType}>
            <SelectTrigger className="w-[100px] sm:w-[120px]">
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="line">Line Chart</SelectItem>
              <SelectItem value="pie">Pie Chart</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="h-[300px] sm:h-[340px]">
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
