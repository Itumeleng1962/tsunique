import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SEO } from "@/components/common/SEO";
import { SERVICES } from "@/data/services";
import { ZAR } from "@/lib/utils";

export default function Services() {
  const [query, setQuery] = useState("");

  const filteredServices = SERVICES.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase()) ||
    s.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SEO title="Laundry Services Catalogue" description="Full list of 11 specialized laundry services including Wash & Fold, Wash & Iron, Dry Cleaning, School Uniforms, Bedding & Linen, Curtains, Commercial Laundry, and Same-Day Express." />
      
      <PageHero
        eyebrow="Our services"
        title="Comprehensive Laundry Care & Processing"
        lede="Eleven specialized laundry services, one obsessive quality standard. Includes turnaround SLAs, transparent pricing guidance, and doorstep pickup."
      />

      <section className="container-x py-16 lg:py-24">
        {/* Search Bar */}
        <div className="mx-auto max-w-xl mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#9A9A9A]" />
            <input
              type="text"
              placeholder="Search services (e.g. Duvets, Dry Cleaning, School Uniforms)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-line bg-surface py-3.5 pl-12 pr-6 text-sm text-cream placeholder-[#666] outline-none transition-colors focus:border-gold"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link
                to={`/services/${s.slug}`}
                data-testid={`service-card-${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl glass-card">
                    <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur-md flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {s.turnaround}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-cream">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9A9A9A]">{s.tagline}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-sm text-[#9A9A9A]">
                      From <b className="text-cream">{s.from ? ZAR(s.from) : "Free"}</b> {s.unit}
                    </span>
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
