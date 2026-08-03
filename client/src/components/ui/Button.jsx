function Button({
  children,
  loading = false,
  type = "submit",
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;