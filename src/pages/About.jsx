import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Counter } from "@/components/common/Counter";
import { STATS } from "@/data/content";
import { IMAGES } from "@/lib/constants";
import { Heart, Target, Sparkles } from "lucide-react";

const VALUES = [
  { icon: Sparkles, title: "Excellence, always", text: "We treat every garment as if it were our own — because trust is earned one fold at a time." },
  { icon: Heart, title: "People first", text: "Friendly, reliable service from a team that genuinely cares about giving you time back." },
  { icon: Target, title: "Relentlessly reliable", text: "Rain or not, we serve. On-time collection and delivery is a promise, not a hope." },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Founded on a simple belief: your time is precious" lede="Established in 2025 in Katlehong, TS Unique Laundry began with one promise — clean, fresh, professionally handled laundry that makes everyday life easier. Rain or not, we serve." />
      <section className="container-x py-16 lg:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <img src={IMAGES.cleanTowels} alt="Our facility" className="h-[420px] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Vision & mission" title="Trusted fabric care for every community" lede="Our vision is to become a trusted, reliable laundry service known for quality, consistency and care. Our mission is to deliver clean, fresh, professionally handled laundry through efficient systems and excellent service." />
          <Reveal>
            <p className="text-base leading-relaxed text-[#9A9A9A]">We combine flexibility — pay-as-you-go or a monthly subscription — with transparent wash and kilogram tracking, so you always know exactly what you're getting. Our slogan says it best: <span className="font-serif text-xl italic text-gold">Rain or Not, we serve.</span></p>
            <p className="mt-4 text-base leading-relaxed text-[#9A9A9A]">Whether you choose a once-off service or a subscription plan, every item is treated with attention and professionalism. Your clothes, our care.</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading center eyebrow="What we stand for" title="Values woven into everything" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10"><v.icon className="h-6 w-6 text-gold" strokeWidth={1.25} /></span>
                <h3 className="mt-6 font-serif text-2xl text-cream">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9A9A9A]">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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
