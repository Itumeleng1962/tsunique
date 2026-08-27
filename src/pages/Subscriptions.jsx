import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { PlanCard } from "@/components/common/PlanCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PLANS } from "@/data/plans";
import { Check, X } from "lucide-react";
import { ZAR } from "@/lib/utils";

const ROWS = [
  { label: "Monthly kilograms", get: (p) => `${p.kg}kg` },
  { label: "Collections / month", get: (p) => p.washes },
  { label: "Wash, Dry & Fold", get: (p) => true },
  { label: "Free delivery & collection", get: (p) => "Within 3 km" },
  { label: "Ironing (add-on)", get: (p) => "R8.50/kg" },
  { label: "Express lane", get: (p) => ["plus", "premium"].includes(p.id) },
  { label: "Dedicated manager", get: (p) => p.id === "premium" },
];

export default function Subscriptions() {
  return (
    <>
      <PageHero eyebrow="Subscriptions" title="Choose the plan that fits your life" lede="Five tiers, no lock-in. Every plan includes premium care, live tracking and doorstep service." />
      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PLANS.map((p, i) => <Reveal key={p.id} delay={i * 0.05} className="h-full"><PlanCard plan={p} /></Reveal>)}
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Compare" title="Plans side by side" />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0" data-testid="plan-comparison-table">
              <thead>
                <tr>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.id} className={`p-4 text-center ${p.recommended ? "rounded-t-2xl bg-ink text-white" : "text-cream"}`}>
                      <p className="font-serif text-xl">{p.name}</p>
                      <p className={`text-xs ${p.recommended ? "text-gold" : "text-[#9A9A9A]"}`}>{ZAR(p.price)}/mo</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={row.label}>
                    <td className="border-t border-line p-4 text-sm font-medium text-cream">{row.label}</td>
                    {PLANS.map((p) => {
                      const val = row.get(p);
                      return (
                        <td key={p.id} className={`border-t border-line p-4 text-center text-sm ${p.recommended ? "bg-ink/[0.02]" : ""}`}>
                          {val === true ? <Check className="mx-auto h-4 w-4 text-gold" strokeWidth={2.5} /> : val === false ? <X className="mx-auto h-4 w-4 text-[#ccc]" strokeWidth={2} /> : <span className="text-cream">{val}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
