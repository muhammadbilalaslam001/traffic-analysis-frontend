"use client";

import { Suspense, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
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
  console.log("data is ", countryTraffic);
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
        <CardContent>
          <CountryTrafficChart
            chartType={countryChartType}
            data={countryTraffic}
          />
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

function ChartSkeleton({ chartType }: { chartType: string }) {
  console.log("in skeleton");
  if (chartType === "pie") {
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        <div className="relative">
          <Skeleton className="h-[160px] w-[160px] rounded-full" />
          <div className="absolute bottom-0 left-0 right-0">
            <Skeleton className="mx-auto mb-4 h-4 w-[200px]" />
            <Skeleton className="mx-auto h-4 w-[150px]" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-[300px] w-full p-4">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex h-full items-end space-x-2">
          <Skeleton className="h-[40%] w-[10%]" />
          <Skeleton className="h-[65%] w-[10%]" />
          <Skeleton className="h-[85%] w-[10%]" />
          <Skeleton className="h-[50%] w-[10%]" />
          <Skeleton className="h-[70%] w-[10%]" />
          <Skeleton className="h-[45%] w-[10%]" />
          <Skeleton className="h-[60%] w-[10%]" />
        </div>
        <Skeleton className="mt-4 h-4 w-full" />
      </div>
    </div>
  );
}
