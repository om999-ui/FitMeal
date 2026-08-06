import SkeletonCard from "./SkeletonCard";

function MealsSkeleton() {
  return (
    <div className="space-y-8">

      {/* Nutrition Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <SkeletonCard className="h-32" />
        <SkeletonCard className="h-32" />
        <SkeletonCard className="h-32" />
        <SkeletonCard className="h-32" />
      </div>

      {/* Add Meal Form */}
      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <SkeletonCard className="mb-6 h-8 w-48" />

        <div className="space-y-4">

          <SkeletonCard className="h-12" />
          <SkeletonCard className="h-12" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SkeletonCard className="h-12" />
            <SkeletonCard className="h-12" />
            <SkeletonCard className="h-12" />
            <SkeletonCard className="h-12" />
          </div>

          <SkeletonCard className="h-12 w-full" />

        </div>

      </div>

      {/* Meal Cards */}
      <SkeletonCard className="h-56" />
      <SkeletonCard className="h-56" />
      <SkeletonCard className="h-56" />

    </div>
  );
}

export default MealsSkeleton;