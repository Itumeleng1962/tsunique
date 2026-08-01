import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { FAQS } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <>
      <PageHero eyebrow="Support" title="Frequently asked questions" lede="Can't find your answer? Our team is one WhatsApp message away." />
      <section className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-line">
                  <AccordionTrigger className="text-left font-serif text-xl text-cream hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#9A9A9A]">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal className="mt-12 text-center">
            <p className="text-[#9A9A9A]">Still have questions?</p>
            <Link to="/contact" className="mt-4 inline-block rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gold">Contact our team</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
