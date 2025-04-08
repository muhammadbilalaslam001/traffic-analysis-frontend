import { Skeleton } from "@/components/ui/skeleton";

export default function ChartSkeleton({ chartType }: { chartType: string }) {
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
