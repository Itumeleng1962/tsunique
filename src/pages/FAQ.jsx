import { useState } from "react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SEO } from "@/components/common/SEO";
import { FAQS, FAQ_CATEGORIES } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Search, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQ() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCategory = category === "All" || f.category === category;
    const matchesSearch =
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions & Policy Guide"
        description="Find answers about TS Laundry subscription rules, payment methods, turnaround times, accepted items, lost or damaged garments policy, refund policy, and customer responsibilities."
      />

      <PageHero
        eyebrow="Help & Knowledge Base"
        title="Frequently Asked Questions"
        lede="Everything you need to know about subscription plans, payment options, garment care policies, turnaround times, and customer responsibilities."
      />

      <section className="container-x py-16 lg:py-24">
        {/* Search & Category Filter */}
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#9A9A9A]" />
            <input
              type="text"
              placeholder="Search topics (e.g. Refunds, Turnaround, Damaged items, Payments)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-line bg-surface py-3.5 pl-12 pr-6 text-sm text-cream placeholder-[#666] outline-none focus:border-gold"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  category === cat
                    ? "border-gold bg-gold text-white"
                    : "border-line bg-surface text-[#9A9A9A] hover:border-ink/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="mx-auto max-w-3xl mt-12">
          {filteredFaqs.length > 0 ? (
            <Reveal>
              <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
                {filteredFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-line">
                    <AccordionTrigger className="text-left font-serif text-lg text-cream hover:text-gold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold uppercase tracking-wider">
                          {f.category}
                        </span>
                        <span>{f.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-[#9A9A9A] pt-2 pb-4">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ) : (
            <div className="text-center py-12 text-[#9A9A9A]">
              <HelpCircle className="mx-auto h-12 w-12 text-gold/40 mb-3" />
              <p>No questions found matching your search. Please reach out to our team!</p>
            </div>
          )}

          <Reveal className="mt-16 text-center space-y-4 rounded-3xl border border-line bg-surface p-8">
            <h4 className="font-serif text-2xl text-cream">Still have questions?</h4>
            <p className="text-xs text-[#9A9A9A]">Our support team is available Monday to Saturday to assist you.</p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/contact" className="rounded-full bg-gold px-8 py-3.5 text-xs font-semibold text-white hover:bg-surface hover:text-cream">
                Contact Support Form
              </Link>
              <a
                href="https://wa.me/27118924000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-cloud px-8 py-3.5 text-xs font-semibold text-cream hover:border-gold"
              >
                <MessageSquare className="h-4 w-4 text-gold" /> WhatsApp Live Chat
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
