import { Reveal } from "@/components/common/Motion";

// Consistent inner-page hero band
export function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="relative overflow-hidden bg-cloud pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold">{eyebrow}</span>}
          <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-tight text-cream sm:text-6xl">{title}</h1>
          {lede && <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#9A9A9A]">{lede}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
