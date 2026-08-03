import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Input({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-all
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-green-600"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;