import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Counter } from "@/components/common/Counter";
import { SEO } from "@/components/common/SEO";
import { STATS, COMPANY_PROFILE } from "@/data/content";
import { IMAGES } from "@/lib/constants";
import { Heart, Target, Sparkles, ShieldCheck, CheckCircle2, History } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO title="About Us | Company Profile & Mission" description="Learn about TS Unique Laundry Services — our vision, mission, company history, and service commitments across Katlehong." />
      
      <PageHero
        eyebrow="Our story"
        title="Founded on a simple belief: your time is precious"
        lede="Established in Katlehong, TS Unique Laundry Management began with one promise — clean, fresh, professionally handled laundry that makes everyday life easier. Rain or Shine, We Serve."
      />

      <section className="container-x py-16 lg:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <img src={IMAGES.cleanTowels} alt="TS Laundry facility" className="h-[420px] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Vision & mission"
            title="Trusted fabric care for every community"
            lede={COMPANY_PROFILE.vision}
          />
          <Reveal className="space-y-4">
            <div className="rounded-2xl border border-line bg-cloud/50 p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5"><Target className="h-4 w-4" /> Our Mission</span>
              <p className="text-sm leading-relaxed text-cream">{COMPANY_PROFILE.mission}</p>
            </div>
            <div className="rounded-2xl border border-line bg-cloud/50 p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5"><Sparkles className="h-4 w-4" /> Company Promise</span>
              <p className="text-sm leading-relaxed text-cream font-serif italic">
                "Rain or Shine, We Serve — transparent per-kg tracking, insured garment handling, and guaranteed turnaround times."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x py-20 lg:py-28">
        <SectionHeading center eyebrow="What we stand for" title="Values woven into everything we do" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMPANY_PROFILE.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-all hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10"><Sparkles className="h-6 w-6 text-gold" strokeWidth={1.25} /></span>
                <h3 className="mt-6 font-serif text-xl text-cream">{v.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#9A9A9A]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BUSINESS HISTORY TIMELINE */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Our Journey" title="Business Growth & Milestones" />
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {COMPANY_PROFILE.history.map((h, i) => (
              <Reveal key={h.year} delay={i * 0.1}>
                <div className="relative rounded-3xl border border-line bg-cloud p-6 space-y-2">
                  <span className="font-serif text-3xl font-light text-gold">{h.year}</span>
                  <h4 className="font-serif text-lg text-cream">{h.title}</h4>
                  <p className="text-xs text-[#9A9A9A] leading-relaxed">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE COMMITMENTS */}
      <section className="bg-surface py-20 border-t border-line">
        <div className="container-x max-w-4xl mx-auto text-center space-y-8">
          <SectionHeading center eyebrow="Guarantees" title="Our Service Commitments" />
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {COMPANY_PROFILE.commitments.map((c, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-cloud/40 p-4">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-cream">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="noise relative overflow-hidden bg-ink py-24 text-white">
        <div className="container-x relative z-10 grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-5xl font-light text-gold sm:text-6xl"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
