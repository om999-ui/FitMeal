import { AlertTriangle } from "lucide-react";

function DeleteModal({
  isOpen,
  title = "Delete Item",
  message,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle
            size={32}
            className="text-red-600"
          />
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="mt-4 text-center text-slate-500">
          {message}
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;