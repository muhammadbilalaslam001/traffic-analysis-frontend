"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ChartSkeleton({ chartType }: { chartType: string }) {
  if (chartType === "pie") {
    return (
      <div className="h-[300px] w-full flex items-center justify-center">
        <div className="relative">
          <div className="h-[160px] w-[160px] rounded-full bg-muted/60 animate-pulse" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto mb-4 h-4 w-[200px] bg-muted/60 animate-pulse rounded-md" />
            <div className="mx-auto h-4 w-[150px] bg-muted/60 animate-pulse rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  // Bar/Line chart skeleton
  return (
    <div className="h-[300px] w-full">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex h-[calc(100%_-_20px)] items-end space-x-2 px-4">
          <div className="h-[40%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
          <div className="h-[65%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
          <div className="h-[85%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
          <div className="h-[50%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
          <div className="h-[70%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
          <div className="h-[45%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
          <div className="h-[60%] w-[10%] bg-muted/60 animate-pulse rounded-md" />
        </div>
        <div className="hidden md:flex h-4 w-full bg-muted/60 animate-pulse rounded-md mt-4 mx-4" />
      </div>
    </div>
  );
}
