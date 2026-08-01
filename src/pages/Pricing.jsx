import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PricingCalculator } from "@/components/common/PricingCalculator";
import { PRICING } from "@/data/plans";
import { SERVICES } from "@/data/services";
import { ZAR } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Fair, transparent, per kilogram" lede="No hidden fees. Pay for what you wash, or subscribe for the best rate. Prices in South African Rand." />
      <section className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-4xl"><Reveal><PricingCalculator /></Reveal></div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Rate card" title="Per-service pricing" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-surface">
            {SERVICES.map((s) => (
              <div key={s.slug} className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-4">
                  <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <div><p className="font-medium text-cream">{s.title}</p><p className="text-xs text-[#9A9A9A]">{s.tagline}</p></div>
                </div>
                <span className="text-sm text-[#9A9A9A]">from <b className="font-serif text-lg text-cream">{s.from ? ZAR(s.from) : "Free"}</b> <span className="text-xs">{s.unit}</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading center eyebrow="Add-ons" title="Special services" lede="Beyond the everyday — bags, curtains, stain treatment and express, all at transparent rates." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.special.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="rounded-3xl border border-line bg-surface p-6 text-center transition-all hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.05)]">
                <p className="font-serif text-4xl font-light text-gold">{c.price}</p>
                <p className="text-xs text-[#9A9A9A]">{c.unit}</p>
                <p className="mt-3 text-sm font-medium text-cream">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-gold bg-gold/5 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-serif text-2xl text-cream">Free collection &amp; delivery within 3 km</p>
              <p className="mt-1 text-sm text-[#9A9A9A]">Beyond 3 km just R15 · Plus 20% OFF every referral</p>
            </div>
            <Link to="/contact" className="shrink-0 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gold">Book a pickup</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
