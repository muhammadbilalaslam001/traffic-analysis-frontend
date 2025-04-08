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

  // Simulate loading finish after component mount
  useEffect(() => {
    // This prevents hydration mismatch by only showing skeletons client-side
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card className="w-full lg:w-3/4 xl:w-11/12">
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
        <CardContent className="h-[340px]">
          {/* Fixed height container */}
          <div className="relative w-full h-full">
            {isLoading ? (
              <ChartSkeleton chartType={countryChartType} />
            ) : (
              <CountryTrafficChart
                chartType={countryChartType}
                data={countryTraffic}
              />
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full lg:w-3/4 xl:w-11/12">
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
        <CardContent className="h-[340px]">
          {/* Fixed height container */}
          <div className="relative w-full h-full">
            {isLoading ? (
              <ChartSkeleton chartType={vehicleChartType} />
            ) : (
              <VehicleTypeChart
                chartType={vehicleChartType}
                data={vehicleTraffic}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
