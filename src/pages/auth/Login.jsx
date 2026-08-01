import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { useAuth } from "@/context/AuthContext";
import { AuthField, authInputClass } from "@/components/common/AuthField";

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 500));
    const { role } = login(data.email);
    toast.success("Welcome back!");
    navigate(role === "admin" ? "/admin" : "/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to manage your laundry and subscription."
      footer={<>New here? <Link to="/register" className="font-medium text-gold">Create an account</Link></>}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="login-form">
        <AuthField label="Email" error={errors.email}><input {...register("email")} data-testid="login-email" className={authInputClass} placeholder="you@email.co.za" /></AuthField>
        <AuthField label="Password" error={errors.password}><input type="password" {...register("password")} data-testid="login-password" className={authInputClass} placeholder="••••••••" /></AuthField>
        <div className="flex justify-end"><Link to="/forgot-password" className="text-sm font-medium text-gold">Forgot password?</Link></div>
        <button type="submit" disabled={isSubmitting} data-testid="login-submit" className="w-full rounded-full bg-ink py-4 text-sm font-medium text-white transition-colors hover:bg-gold disabled:opacity-60">{isSubmitting ? "Signing in..." : "Sign in"}</button>
        <p className="rounded-xl bg-cloud px-4 py-3 text-center text-xs text-[#9A9A9A]">Demo: any email works. Use <b className="text-cream">admin@ts.co.za</b> for the admin view.</p>
      </form>
    </AuthLayout>
  );
}
