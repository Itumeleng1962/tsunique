import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { useAuth } from "@/context/AuthContext";
import { AuthField, authInputClass } from "@/components/common/AuthField";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "At least 6 characters"),
  terms: z.literal(true, { errorMap: () => ({ message: "Please accept the terms" }) }),
});

export default function Register() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    registerUser(data);
    toast.success("Account created — welcome to TS Unique!");
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your first pickup in minutes. No card required to sign up."
      footer={<>Already a member? <Link to="/login" className="font-medium text-gold">Sign in</Link></>}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="register-form">
        <AuthField label="Full name" error={errors.name}><input {...register("name")} data-testid="register-name" className={authInputClass} placeholder="Your name" /></AuthField>
        <AuthField label="Email" error={errors.email}><input {...register("email")} data-testid="register-email" className={authInputClass} placeholder="you@email.co.za" /></AuthField>
        <AuthField label="Password" error={errors.password}><input type="password" {...register("password")} data-testid="register-password" className={authInputClass} placeholder="••••••••" /></AuthField>
        <label className="flex items-start gap-3 text-sm text-[#9A9A9A]">
          <input type="checkbox" {...register("terms")} data-testid="register-terms" className="mt-0.5 h-4 w-4 accent-[#C89D2A]" />
          <span>I agree to the <Link to="/terms" className="text-gold">Terms</Link> and <Link to="/privacy" className="text-gold">Privacy Policy</Link>.</span>
        </label>
        {errors.terms && <p className="-mt-3 text-xs text-red-500">{errors.terms.message}</p>}
        <button type="submit" disabled={isSubmitting} data-testid="register-submit" className="w-full rounded-full bg-ink py-4 text-sm font-medium text-white transition-colors hover:bg-gold disabled:opacity-60">{isSubmitting ? "Creating..." : "Create account"}</button>
      </form>
    </AuthLayout>
  );
}
