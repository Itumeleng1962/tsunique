import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { STEPS } from "@/data/content";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From hamper to hanger in four steps" lede="A seamless, tech-enabled experience designed around your schedule — not ours." />
      <section className="container-x py-20 lg:py-28">
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-line lg:block" />
          <div className="space-y-14">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink font-serif text-2xl text-gold">{s.n}</div>
                  <div className="rounded-3xl border border-line bg-surface p-8">
                    <h3 className="font-serif text-3xl font-light text-cream">{s.title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-[#9A9A9A]">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x pb-24">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center text-white lg:px-16">
            <h2 className="relative z-10 font-serif text-4xl font-light">Your first pickup is a tap away</h2>
            <Link to="/register" className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-white transition-all hover:bg-surface hover:text-cream hover:-translate-y-1">Schedule now <ArrowRight className="h-4 w-4" strokeWidth={1.75} /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
