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
    { h: "1. General Guidelines & Risk", p: "All clothes are handled with the utmost care, but laundry/washing is done at the customer's own risk. TS Unique Laundry is not responsible for color fading, shrinkage, or damage caused by manufacturer defects. Items with pre-existing damage or weak fabric may not withstand the washing process. Please check all pockets before submitting laundry; TS Unique Laundry is not liable for lost or damaged items left inside. Stains will be treated to the best of our professional ability, but complete removal cannot be guaranteed." },
    { h: "2. Special Items & Fabrics", p: "Delicate fabrics require special handling and may incur additional charges. Leather, suede, and specialty materials are washed at the customer's risk. Curtains, towels, white items, bags, blankets, and large items may require extended processing time." },
    { h: "3. Collection and Delivery Policy", p: "TS Unique Laundry will only deliver or collect your laundry between 6:00 PM and 8:00 PM (18:00 – 20:00). However, customers are welcome to bring or collect their laundry at our business address (85 Matlala St, Palime, Katlehong) from 7:00 AM till 7:00 PM (07:00 – 19:00). An amount of R50 collection/delivery fee will be charged upon CANCELLATION of services." },
    { h: "4. Liability & Garment Claims", p: "Compensation for lost or damaged items will not exceed three times (3x) the laundry charge of the specific item. Proof of receipt is required for any claim. Lost items must be claimed within 2 days. TS Unique Laundry is not responsible for items damaged or lost due to natural disasters or fire." },
    { h: "5. Invoicing, Payment & Unclaimed Items", p: "By settling your invoice you legally acknowledge and agree that the quantity of the laundry items listed on the invoice is correct. Full payment of the invoice is required prior to the release of the laundry to the customer. Unclaimed items after 30 days will be considered abandoned and may be donated or disposed of." },
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
