import SkeletonCard from "./SkeletonCard";

function DashboardSkeleton() {
  return (
    <div className="space-y-8">

      {/* Greeting */}
      <div className="space-y-3">
        <SkeletonCard className="h-8 w-64" />
        <SkeletonCard className="h-5 w-80" />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <SkeletonCard className="h-36" />
        <SkeletonCard className="h-36" />
        <SkeletonCard className="h-36" />
        <SkeletonCard className="h-36" />

      </div>

      {/* Progress + Chart */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

        <SkeletonCard className="h-80" />
        <SkeletonCard className="h-80" />

      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <SkeletonCard className="h-28" />
        <SkeletonCard className="h-28" />
        <SkeletonCard className="h-28" />
        <SkeletonCard className="h-28" />

      </div>

      {/* Health Tip */}
      <SkeletonCard className="h-40" />

    </div>
  );
}

export default DashboardSkeleton;