function SkeletonCard({
  className = "",
}) {
  return (
    <div
      className={`
        animate-pulse rounded-2xl
        bg-slate-200
        ${className}
      `}
    />
  );
}

export default SkeletonCard;