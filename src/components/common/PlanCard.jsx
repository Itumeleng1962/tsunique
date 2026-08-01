import { Link } from "react-router-dom";
import { Check, X, Sparkles } from "lucide-react";
import { ZAR } from "@/lib/utils";

// Subscription plan card with recommended highlight
export function PlanCard({ plan, index = 0 }) {
  const rec = plan.recommended;
  return (
    <div
      data-testid={`plan-card-${plan.id}`}
      className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 ${
        rec
          ? "border-gold bg-ink text-white shadow-[0_24px_80px_rgba(200,157,42,0.25)] lg:-translate-y-4"
          : "border-line bg-surface text-cream hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.06)]"
      }`}
    >
      {rec && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} /> Recommended
        </span>
      )}
      <h3 className="font-serif text-2xl">{plan.name}</h3>
      <p className={`mt-1 text-sm ${rec ? "text-white/60" : "text-[#9A9A9A]"}`}>{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-1">
        <span className="font-serif text-5xl font-light">{ZAR(plan.price)}</span>
        <span className={`mb-2 text-sm ${rec ? "text-white/50" : "text-[#9A9A9A]"}`}>/month</span>
      </div>
      <div className={`mt-3 flex gap-4 text-sm ${rec ? "text-white/70" : "text-[#9A9A9A]"}`}>
        <span><b className={rec ? "text-gold" : "text-cream"}>{plan.kg}kg</b> included</span>
        <span><b className={rec ? "text-gold" : "text-cream"}>{plan.washes}</b> collections</span>
      </div>

      <Link
        to="/register"
        data-testid={`plan-cta-${plan.id}`}
        className={`mt-8 rounded-full py-3.5 text-center text-sm font-medium transition-all duration-300 ${
          rec ? "bg-gold text-white hover:bg-surface hover:text-cream" : "bg-ink text-white hover:bg-gold"
        }`}
      >
        Choose {plan.name}
      </Link>

      <ul className="mt-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${rec ? "text-gold" : "text-gold"}`} strokeWidth={2} />
            <span className={rec ? "text-white/80" : "text-cream/80"}>{f}</span>
          </li>
        ))}
        {plan.excluded?.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <X className="mt-0.5 h-4 w-4 shrink-0 text-[#999]" strokeWidth={2} />
            <span className={rec ? "text-white/30 line-through" : "text-[#999] line-through"}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
