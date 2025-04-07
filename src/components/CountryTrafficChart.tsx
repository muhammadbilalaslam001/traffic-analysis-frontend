"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { TrafficSummary } from "@/types/traffic";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CountryTrafficChartProps {
  chartType: string;
  data: TrafficSummary[];
}

export default function CountryTrafficChart({
  chartType,
  data,
}: CountryTrafficChartProps) {
  const COLORS = [
    "var(--color-chart-1)",
    "var(--color-chart-2)",
    "var(--color-chart-3)",
    "var(--color-chart-4)",
    "var(--color-chart-5)",
  ];

  // Check if data is empty or undefined
  if (!data || data.length === 0) {
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No data available</AlertTitle>
          <AlertDescription>
            There is no country traffic data to display. Please check your data
            source.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (chartType === "bar") {
    return (
      <ChartContainer
        config={{
          count: {
            label: "Traffic",
            color: "var(--color-chart-1)",
          },
        }}
        className="h-[300px]"
      >
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-chart-1)" />
        </BarChart>
      </ChartContainer>
    );
  }

  if (chartType === "line") {
    return (
      <ChartContainer
        config={{
          count: {
            label: "Traffic",
            color: "var(--color-chart-1)",
          },
        }}
        className="h-[300px]"
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="count"
            stroke="var(--color-chart-1)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ChartContainer>
    );
  }

  if (chartType === "pie") {
    return (
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="country"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
              label={({ index, percent }) =>
                `${data[index!].country}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value} visits`, "Traffic"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}
