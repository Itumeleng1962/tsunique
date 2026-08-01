import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SERVICES } from "@/data/services";
import { ZAR } from "@/lib/utils";

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Care for every corner of your wardrobe" lede="Twelve specialist services, one obsessive standard. Choose what you need — or let a subscription cover it all." />
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link to={`/services/${s.slug}`} data-testid={`service-card-${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.06)]">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl glass-card"><s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} /></span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-cream">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9A9A9A]">{s.tagline}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-sm text-[#9A9A9A]">From <b className="text-cream">{s.from ? ZAR(s.from) : "Free"}</b> {s.unit}</span>
                    <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
