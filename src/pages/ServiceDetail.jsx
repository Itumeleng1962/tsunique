import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { getService, SERVICES } from "@/data/services";
import { Reveal } from "@/components/common/Motion";
import { ZAR } from "@/lib/utils";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-cloud pt-32 lg:pt-40">
        <div className="container-x grid items-center gap-14 pb-16 lg:grid-cols-2 lg:pb-24">
          <Reveal>
            <Link to="/services" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#9A9A9A] transition-colors hover:text-cream"><ArrowLeft className="h-4 w-4" strokeWidth={1.75} /> All services</Link>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10"><service.icon className="h-7 w-7 text-gold" strokeWidth={1.25} /></span>
            <h1 className="mt-6 font-serif text-5xl font-light leading-tight tracking-tight text-cream sm:text-6xl">{service.title}</h1>
            <p className="mt-3 text-lg text-gold">{service.tagline}</p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#9A9A9A]">{service.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/register" data-testid="service-book-button" className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-gold hover:-translate-y-1">Book now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></Link>
              <span className="rounded-full border border-line bg-surface px-6 py-4 text-sm text-[#9A9A9A]">From <b className="text-cream">{service.from ? ZAR(service.from) : "Free"}</b> {service.unit}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_rgba(0,0,0,0.1)]">
              <img src={service.image} alt={service.title} className="h-[460px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">What's included</span>
            <h2 className="mt-4 font-serif text-4xl font-light text-cream">Every detail, handled</h2>
          </Reveal>
          <div className="space-y-4">
            {service.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-cloud p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10"><Check className="h-4 w-4 text-gold" strokeWidth={2} /></span>
                  <p className="text-base font-medium text-cream">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <h2 className="font-serif text-3xl font-light text-cream">You might also like</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {related.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10"><s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} /></span>
              <div><p className="font-serif text-lg text-cream">{s.title}</p><p className="text-xs text-[#9A9A9A]">{s.tagline}</p></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
