import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";

const SECTIONS = {
  privacy: [
    { h: "Introduction", p: "TS Unique Laundry (\"we\", \"us\") respects your privacy. This policy explains how we collect, use and protect your personal information in line with South Africa's POPIA regulations." },
    { h: "Information we collect", p: "We collect your name, contact details, delivery address and payment information solely to provide and improve our laundry services." },
    { h: "How we use your data", p: "Your data is used to process orders, manage subscriptions, arrange collection and delivery, and communicate service updates. We never sell your information to third parties." },
    { h: "Data security", p: "We employ industry-standard encryption and access controls. Payment details are handled by PCI-compliant providers and are never stored on our servers." },
    { h: "Your rights", p: "You may access, correct or delete your personal information at any time by contacting hello@tsuniquelaundry.co.za." },
  ],
  terms: [
    { h: "Acceptance of terms", p: "By using TS Unique Laundry's website and services, you agree to these terms. If you do not agree, please refrain from using our services." },
    { h: "Services", p: "We provide laundry collection, cleaning and delivery. Turnaround times are estimates and may vary during peak periods or adverse weather — though rain or not, we serve." },
    { h: "Payments & subscriptions", p: "Subscriptions are billed monthly and may be paused or cancelled anytime. All prices are in South African Rand and include applicable taxes unless stated otherwise." },
    { h: "Garment care & liability", p: "We handle every item with insured care. Our liability for loss or damage is limited as set out in our garment-protection policy. Please declare special garments in advance." },
    { h: "Cancellations", p: "Pickups can be rescheduled up to 2 hours before the collection window at no charge. Missed collections may incur a small re-scheduling fee." },
  ],
};

export function Legal({ type }) {
  const isPrivacy = type === "privacy";
  return (
    <>
      <PageHero eyebrow="Legal" title={isPrivacy ? "Privacy Policy" : "Terms of Service"} lede={`Last updated 1 June 2026. ${isPrivacy ? "How we handle and protect your data." : "The terms governing your use of our services."}`} />
      <section className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS[type].map((s, i) => (
            <Reveal key={s.h} delay={i * 0.04}>
              <h2 className="font-serif text-2xl text-cream">{s.h}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#9A9A9A]">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
