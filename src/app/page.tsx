import { Suspense } from "react";
import {
  getCountryTraffic,
  getVehicleTypeTraffic,
} from "@/action/TrafficQuety";
import Dashboard from "@/components/Dashboard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TrafficSummary } from "@/types/traffic";
import Loading from "@/components/Loading";

export default async function Home() {
  // Data fetching happens server-side
  const countryTrafficRes = await getCountryTraffic();
  const vehicleTrafficRes = await getVehicleTypeTraffic();
  const countryTraffic: TrafficSummary[] = countryTrafficRes.data ?? [];
  const vehicleTraffic: TrafficSummary[] = vehicleTrafficRes.data ?? [];

  // Add debugging logs
  console.log("Country Traffic Response:", countryTrafficRes);
  console.log("Vehicle Traffic Response:", vehicleTrafficRes);
  console.log("Country Traffic Data:", countryTraffic);
  console.log("Vehicle Traffic Data:", vehicleTraffic);

  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen w-full overflow-x-hidden bg-background">
        <div className="w-[95%] sm:w-11/12 max-w-[1400px] mx-auto py-4">
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
              Traffic Data Dashboard
            </h1>
            <ThemeToggle />
          </div>
          <Dashboard
            countryTraffic={countryTraffic}
            vehicleTraffic={vehicleTraffic}
          />
        </div>
      </main>
    </Suspense>
  );
}
