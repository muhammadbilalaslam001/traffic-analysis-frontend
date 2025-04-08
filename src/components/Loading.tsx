export default function Loading() {
  return (
    <main className="min-h-screen mx-auto pt-4">
      <div className="mx-auto w-5/6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Traffic Data Dashboard
          </h1>
          <div className="h-10 w-10 rounded-md bg-muted animate-pulse" />
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {/* Country Traffic Card Skeleton */}
          <div className="w-full lg:w-3/4 xl:w-11/12 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-row items-center justify-between">
              <div>
                <div className="h-6 w-48 bg-muted rounded animate-pulse mb-2" />
                <div className="h-4 w-64 bg-muted/80 rounded animate-pulse" />
              </div>
              <div className="h-10 w-28 bg-muted rounded animate-pulse" />
            </div>
            <div className="p-6">
              <div className="h-[300px] w-full p-4">
                <div className="flex h-full w-full flex-col justify-between">
                  <div className="flex h-full items-end space-x-2">
                    <div className="h-[40%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[65%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[85%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[50%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[70%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[45%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[60%] w-[10%] bg-muted animate-pulse rounded" />
                  </div>
                  <div className="mt-4 h-4 w-full bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Type Card Skeleton */}
          <div className="w-full lg:w-3/4 xl:w-11/12 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-row items-center justify-between">
              <div>
                <div className="h-6 w-56 bg-muted rounded animate-pulse mb-2" />
                <div className="h-4 w-48 bg-muted/80 rounded animate-pulse" />
              </div>
              <div className="h-10 w-28 bg-muted rounded animate-pulse" />
            </div>
            <div className="p-6">
              <div className="h-[300px] w-full p-4">
                <div className="flex h-full w-full flex-col justify-between">
                  <div className="flex h-full items-end space-x-2">
                    <div className="h-[60%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[45%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[80%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[70%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[40%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[55%] w-[10%] bg-muted animate-pulse rounded" />
                    <div className="h-[65%] w-[10%] bg-muted animate-pulse rounded" />
                  </div>
                  <div className="mt-4 h-4 w-full bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
