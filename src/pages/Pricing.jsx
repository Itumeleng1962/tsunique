import { useState } from "react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PricingCalculator } from "@/components/common/PricingCalculator";
import { SEO } from "@/components/common/SEO";
import { PaymentModal } from "@/components/common/PaymentModal";
import { PRICING } from "@/data/plans";
import { SERVICES } from "@/data/services";
import { ZAR } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Building2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <SEO title="Pricing & Rate Card | Dynamic Calculator" description="Transparent per-kg laundry pricing, dry cleaning rate card, commercial quotes, and dynamic pricing calculator." />

      <PageHero
        eyebrow="Pricing"
        title="Fair, Transparent, Per Kilogram"
        lede="No hidden fees. Pay per kilogram for everyday laundry, fixed rates for specialty items, or save up to 25% with a monthly subscription plan."
      />

      {/* Dynamic Calculator */}
      <section className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <PricingCalculator />
          </Reveal>
        </div>
      </section>

      {/* Per-Service Rate Card */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Rate card" title="Individual Laundry Services Pricing" />
          <div className="mx-auto mt-12 max-w-4xl divide-y divide-line rounded-3xl border border-line bg-cloud/50">
            {SERVICES.map((s) => (
              <div key={s.slug} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 hover:bg-surface/80 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-serif text-lg text-cream">{s.title}</p>
                    <p className="text-xs text-[#9A9A9A]">{s.tagline} · <span className="text-gold font-medium">{s.turnaround} SLA</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-end sm:self-center">
                  <span className="text-sm text-[#9A9A9A]">
                    from <b className="font-serif text-xl text-cream">{s.from ? ZAR(s.from) : "Free"}</b> <span className="text-xs">{s.unit}</span>
                  </span>
                  <button
                    onClick={() => setSelectedService(s)}
                    className="rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5 text-xs font-semibold text-gold hover:bg-gold hover:text-white transition-all"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & Corporate Laundry Pricing */}
      <section className="container-x py-20 lg:py-28">
        <div className="glass-card rounded-[2.5rem] border border-line p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
              <Building2 className="h-4 w-4" /> B2B Commercial Laundry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream">Custom Rates for Hospitality & Businesses</h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed">
              We provide tailored high-volume laundry contracts for restaurants, hotels, Airbnb hosts, spas, and corporate offices with dedicated logistics.
            </p>
            <div className="space-y-2 text-xs text-cream pt-2">
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Volume-based tiered discounts up to 35%</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Dedicated account manager & monthly tax invoices</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Flexible 7-day scheduled collection routes</p>
            </div>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold text-white hover:bg-surface hover:text-cream transition-all">
                Request Commercial Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-line h-72">
            <img src="https://images.unsplash.com/photo-1604335398980-ededcadcc37d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000" alt="Commercial Laundry" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Specialty Add-Ons */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Add-ons" title="Specialty Items & Additional Charges" lede="Bedding, blankets, bags, stain pre-treatments, and same-day express processing." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING.special.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="rounded-3xl border border-line bg-cloud p-6 text-center transition-all hover:-translate-y-2 hover:bg-surface">
                  <p className="font-serif text-3xl font-light text-gold">{c.price}</p>
                  <p className="text-[11px] text-[#9A9A9A]">{c.unit}</p>
                  <p className="mt-3 text-xs font-medium text-cream">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {selectedService && (
        <PaymentModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          item={selectedService}
          type="service"
        />
      )}
    </>
  );
}
