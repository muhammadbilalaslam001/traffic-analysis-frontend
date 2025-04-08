import {
  getCountryTraffic,
  getVehicleTypeTraffic,
} from "@/action/TrafficQuety";
import Dashboard from "@/components/Dashboard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TrafficSummary } from "@/types/traffic";

export default async function Home() {
  const countryTrafficRes = await getCountryTraffic();
  const vehicleTrafficRes = await getVehicleTypeTraffic();

  const countryTraffic: TrafficSummary[] = countryTrafficRes.data ?? [];
  const vehicleTraffic: TrafficSummary[] = vehicleTrafficRes.data ?? [];
  return (
    <main className="min-h-screen mx-auto pt-4">
      <div className="mx-auto w-5/6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
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
  );
}
