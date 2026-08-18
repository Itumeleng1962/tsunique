import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SEO } from "@/components/common/SEO";
import { STEPS } from "@/data/content";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <>
      <SEO title="How It Works | Step-by-Step Customer Journey" description="6-step guide to TS Laundry subscription: Register online, select a package, pay securely, drop off or schedule pickup, eco washing, and delivery." />
      
      <PageHero
        eyebrow="How it works"
        title="From Hamper to Hanger in 6 Simple Steps"
        lede="A seamless, tech-enabled laundry experience designed around your daily schedule. Register, subscribe, track, and enjoy hotel-fresh laundry."
      />

      <section className="container-x py-20 lg:py-28">
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-line lg:block" />
          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink font-serif text-2xl font-light text-gold border border-gold/30">
                    {s.n}
                  </div>
                  <div className="rounded-3xl border border-line bg-surface p-8 transition-all hover:border-gold/30">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">Step {s.n}</span>
                    <h3 className="font-serif text-3xl font-light text-cream mt-1">{s.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#9A9A9A]">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Journey Value Cards */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x grid sm:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-line bg-cloud p-6 space-y-2 text-center">
            <CheckCircle2 className="h-8 w-8 text-gold mx-auto" />
            <h4 className="font-serif text-xl text-cream">Transparent Weight Logs</h4>
            <p className="text-xs text-[#9A9A9A]">Every load is weighed upon intake and recorded in your live Customer Portal.</p>
          </div>
          <div className="rounded-3xl border border-line bg-cloud p-6 space-y-2 text-center">
            <CheckCircle2 className="h-8 w-8 text-gold mx-auto" />
            <h4 className="font-serif text-xl text-cream">Automated Notifications</h4>
            <p className="text-xs text-[#9A9A9A]">Receive SMS and email alerts at every step — intake, washing, ironing, and dispatch.</p>
          </div>
          <div className="rounded-3xl border border-line bg-cloud p-6 space-y-2 text-center">
            <CheckCircle2 className="h-8 w-8 text-gold mx-auto" />
            <h4 className="font-serif text-xl text-cream">No Lock-In Contracts</h4>
            <p className="text-xs text-[#9A9A9A]">Pause, upgrade, or cancel your 5-week subscription cycle anytime online.</p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center text-white lg:px-16">
            <h2 className="relative z-10 font-serif text-4xl font-light">Your first pickup is a tap away</h2>
            <Link to="/register" className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-white transition-all hover:bg-surface hover:text-cream hover:-translate-y-1">
              Start Online Registration <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
