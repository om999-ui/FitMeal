function TodayDate() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <p className="text-slate-500">
      {formattedDate}
    </p>
  );
}

export default TodayDate;