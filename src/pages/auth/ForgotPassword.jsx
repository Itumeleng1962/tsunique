import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AuthField, authInputClass } from "@/components/common/AuthField";

const schema = z.object({ email: z.string().email("Enter a valid email") });

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <AuthLayout
      title={sent ? "Check your inbox" : "Reset your password"}
      subtitle={sent ? "We've sent a secure reset link to your email." : "Enter your email and we'll send you a reset link."}
      footer={<>Remembered it? <Link to="/login" className="font-medium text-gold">Back to sign in</Link></>}
    >
      {sent ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-cloud p-8 text-center" data-testid="forgot-success">
          <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.25} />
          <p className="text-sm text-[#9A9A9A]">If an account exists for that email, a reset link is on its way. It expires in 30 minutes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="forgot-form">
          <AuthField label="Email" error={errors.email}><input {...register("email")} data-testid="forgot-email" className={authInputClass} placeholder="you@email.co.za" /></AuthField>
          <button type="submit" disabled={isSubmitting} data-testid="forgot-submit" className="w-full rounded-full bg-ink py-4 text-sm font-medium text-white transition-colors hover:bg-gold disabled:opacity-60">{isSubmitting ? "Sending..." : "Send reset link"}</button>
        </form>
      )}
    </AuthLayout>
  );
}
