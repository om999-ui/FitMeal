import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  // Get login function from Auth Context
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      // Save user and token using Context API
      login(response.user, response.token);

      toast.success(response.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue your fitness journey."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          register={register}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          register={register}
          error={errors.password}
        />

        <Button loading={loading}>
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;