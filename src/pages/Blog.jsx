import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { BLOG } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const [feature, ...rest] = BLOG;
  return (
    <>
      <PageHero eyebrow="Journal" title="Notes on fabric, life & time well spent" lede="Care guides, member stories and the occasional laundry secret from our specialists." />
      <section className="container-x py-16 lg:py-24">
        <Reveal>
          <article className="group grid overflow-hidden rounded-[2rem] border border-line bg-surface lg:grid-cols-2" data-testid="blog-feature">
            <div className="h-64 overflow-hidden lg:h-auto">
              <img src={feature.image} alt={feature.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3 text-xs font-medium text-gold"><span className="rounded-full bg-gold/10 px-3 py-1">{feature.category}</span><span className="text-[#9A9A9A]">{feature.date} · {feature.read}</span></div>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-cream">{feature.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-[#9A9A9A]">{feature.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cream">Read article <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></span>
            </div>
          </article>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.06)]">
                <div className="h-48 overflow-hidden"><img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-gold"><span className="rounded-full bg-gold/10 px-2.5 py-0.5">{b.category}</span><span className="text-[#9A9A9A]">{b.read}</span></div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-cream">{b.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9A9A9A]">{b.excerpt}</p>
                  <p className="mt-4 text-xs text-[#9A9A9A]">{b.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
