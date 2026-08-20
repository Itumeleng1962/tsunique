import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Star, ShieldCheck, Truck, Leaf, Clock, Sparkles, Quote, MapPin, Phone, Mail
} from "lucide-react";
import { Reveal } from "@/components/common/Motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Counter } from "@/components/common/Counter";
import { PricingCalculator } from "@/components/common/PricingCalculator";
import { PlanCard } from "@/components/common/PlanCard";
import { Phase2Showcase } from "@/components/common/Phase2Showcase";
import { SEO } from "@/components/common/SEO";
import { SERVICES } from "@/data/services";
import { PLANS } from "@/data/plans";
import { TESTIMONIALS, STATS, FAQS, STEPS } from "@/data/content";
import { IMAGES, BRAND } from "@/lib/constants";
const IMG = IMAGES;
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ZAR } from "@/lib/utils";

const TRUST = [
  { icon: ShieldCheck, label: "Insured garment care" },
  { icon: Truck, label: "Free collection within 3 km" },
  { icon: Clock, label: "24h - 48h SLA turnaround" },
  { icon: Leaf, label: "Eco-friendly detergents" },
];

const WHY = [
  { icon: Sparkles, title: "Boutique-grade finish", text: "Every item is sorted, treated and pressed by trained specialists — not a machine on autopilot." },
  { icon: Clock, title: "Time given back", text: "Reclaim six hours a week. We collect, clean and return so your weekends are yours again." },
  { icon: ShieldCheck, title: "Care you can trust", text: "Insured handling, live tracking and a garment-protection promise on every single order." },
  { icon: Leaf, title: "Kinder to the planet", text: "Biodegradable, hypoallergenic products and water-efficient machines as standard." },
];

export default function Home() {
  return (
    <>
      <SEO title="Home | TS Unique Laundry Management" description="Professional laundry subscription packages, wash & fold, dry cleaning, and same-day express service across Katlehong." />
      
      {/* HERO */}
      <section className="relative flex min-h-[94vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            src={IMG.heroTowels} alt="Premium folded laundry, freshly cleaned" className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
          <div className="noise absolute inset-0" />
        </div>

        {/* Floating glass stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-6 top-28 z-10 hidden lg:block xl:right-16"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-60 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
          >
            <p className="font-serif text-5xl font-light text-white">R21<span className="text-base text-white/60">/kg</span></p>
            <p className="text-sm text-white/70">Wash, Dry &amp; Fold from</p>
            <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-4 text-gold">
              <Truck className="h-4 w-4" strokeWidth={1.5} /><span className="text-xs font-medium text-white/80">Free collection within 3 km</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="container-x relative z-10 pb-24 pt-40 lg:pb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-gold" /> Rain or Shine, We Serve · Est 2021
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Laundry, elevated to a <span className="italic text-gold">quiet luxury</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Premium subscription laundry, dry cleaning, and doorstep delivery for households and businesses across Katlehong. We collect it dirty, return it perfect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/register" data-testid="hero-cta-primary" className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-ink">
              Start Your Plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
            <Link to="/pricing" data-testid="hero-cta-secondary" className="rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
              Calculate Price
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {TESTIMONIALS.map((t) => (
                <img key={t.name} src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full border-2 border-white/80 object-cover" />
              ))}
            </div>
            <div>
              <div className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" strokeWidth={0} />)}</div>
              <p className="mt-1 text-xs text-white/70">Loved by 2,400+ subscribers</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-cloud">
        <div className="container-x -mt-12 relative z-20 pb-4">
          <Reveal className="grid grid-cols-2 gap-4 rounded-3xl border border-line bg-surface p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)] md:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-3 px-2">
                <t.icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
                <span className="text-sm font-medium text-cream">{t.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="container-x py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="What we do" title="A service for every fabric in your life" lede="From weekly essentials to your finest garments — handled with the same obsessive care." />
          <Reveal><Link to="/services" className="group inline-flex items-center gap-1.5 text-sm font-medium text-cream">View all 11 services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></Link></Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link to={`/services/${s.slug}`} data-testid={`home-service-${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_60px_rgba(0,0,0,0.06)]">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl glass-card"><s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} /></span>
                  <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold text-gold backdrop-blur-md">{s.turnaround}</span>
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

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading center eyebrow="Why TS Unique" title="The details others overlook" lede="We built the laundry service we always wished existed — precise, reliable and genuinely premium." />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-cloud p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-surface hover:shadow-[0_16px_60px_rgba(0,0,0,0.05)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10"><w.icon className="h-6 w-6 text-gold" strokeWidth={1.25} /></span>
                  <h3 className="mt-6 font-serif text-2xl text-cream">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9A9A9A]">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading center eyebrow="How it works" title="Effortless customer journey" />
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <span className="font-serif text-4xl font-light text-gold/30">{s.n}</span>
                <h3 className="mt-2 font-serif text-xl text-cream">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#9A9A9A]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING CALCULATOR */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading center eyebrow="Instant pricing" title="No surprises, just a fair estimate" lede="Slide, select and see your price in real time. Transparent per-kilogram pricing." />
          <div className="mx-auto mt-14 max-w-4xl"><Reveal><PricingCalculator /></Reveal></div>
        </div>
      </section>

      {/* SUBSCRIPTIONS */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading center eyebrow="Subscriptions" title="Membership that pays for itself" lede="Lock in your best rate with a 5-week monthly cycle plan — pause, upgrade or cancel anytime." />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.slice(0, 3).map((p, i) => <Reveal key={p.id} delay={i * 0.08} className="h-full"><PlanCard plan={p} /></Reveal>)}
        </div>
        <Reveal className="mt-10 text-center"><Link to="/subscriptions" className="group inline-flex items-center gap-1.5 text-sm font-medium text-cream">Compare all subscription plans <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></Link></Reveal>
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

      {/* TESTIMONIALS */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading center eyebrow="Loved by locals" title="Words from our members" />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                <Quote className="h-8 w-8 text-gold/40" strokeWidth={1.25} />
                <blockquote className="mt-4 flex-1 font-serif text-xl font-light leading-relaxed text-cream">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                  <div><p className="text-sm font-semibold text-cream">{t.name}</p><p className="text-xs text-[#9A9A9A]">{t.role}</p></div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Everything you might ask" lede="Still curious? Reach us anytime on WhatsApp — we reply fast." />
          <Reveal>
            <Accordion type="single" collapsible className="w-full" data-testid="home-faq">
              {FAQS.slice(0, 5).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-line">
                  <AccordionTrigger className="text-left font-serif text-lg text-cream hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#9A9A9A]">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* PHASE 2 FUTURE SHOWCASE */}
      <Phase2Showcase />

      {/* NEWSLETTER */}
      <NewsletterGallery />

      {/* LOCATION & GOOGLE MAPS PREVIEW */}
      <section className="bg-surface py-16 border-t border-line">
        <div className="container-x grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Location</span>
            {/* <h2 className="font-serif text-3xl text-cream">Visit Our Katlehong Hub</h2> */}
            <p className="text-xs text-[#9A9A9A] leading-relaxed">
              Drop off your hamper in person or meet our garment care specialists. Operating Monday through Saturday with express counter intake.
            </p>
            <div className="space-y-2 text-xs text-cream pt-2">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {BRAND.address}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {BRAND.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> {BRAND.email}</p>
            </div>
          </div>
          <div className="h-64 rounded-3xl overflow-hidden border border-line">
            <iframe
              title="TS Laundry Location Map"
              src="https://www.google.com/maps?q=85+Matlala+St,+Palime,+Katlehong,+1431&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-center text-white lg:px-16">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl">Ready to never do laundry again?</h2>
              <p className="mt-5 text-lg text-white/60">Join the households, students and professionals across Katlehong who've handed over the hamper for good.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link to="/register" className="rounded-full bg-gold px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-surface hover:text-cream hover:-translate-y-1">Get started free</Link>
                <Link to="/contact" className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-surface/10">Talk to us</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function NewsletterGallery() {
  const shots = [IMAGES.heroTowels, IMAGES.ironingShirts, IMAGES.cleanTowels, IMAGES.towelStack, IMAGES.foldedShirts, IMAGES.ironBoard];
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold">Stay in the loop</span>
          <h2 className="font-serif text-4xl font-light leading-tight text-cream sm:text-5xl">Fresh tips, straight to your inbox</h2>
          <p className="mt-5 text-[#9A9A9A]">Care guides, member offers and the occasional laundry secret. No spam, unsubscribe anytime.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-md gap-3" data-testid="newsletter-form">
            <input type="email" required placeholder="you@email.co.za" data-testid="newsletter-input" className="flex-1 rounded-full border border-line bg-surface px-6 py-3.5 text-sm outline-none transition-colors focus:border-gold" />
            <button type="submit" data-testid="newsletter-submit" className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gold">Subscribe</button>
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-3">
            {shots.map((src, i) => (
              <div key={i} className="group aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="Instagram" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-[#9A9A9A]">Follow @tsuniquelaundry</p>
        </Reveal>
      </div>
    </section>
  );
}
