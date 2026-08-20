import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SEO } from "@/components/common/SEO";
import { ShieldAlert, AlertTriangle, Truck, Clock, FileText, CheckCircle2 } from "lucide-react";

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer & Service Policies"
        description="Official TS Unique Laundry Disclaimer: general guidelines, special items, collection and delivery, liability, and payment conditions."
      />

      <PageHero
        eyebrow="Policy & Terms"
        title="TS Unique Laundry Disclaimer"
        lede="Please read our operational guidelines, garment care standards, collection rules, and liability terms carefully before submitting laundry."
      />

      <section className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          
          {/* Section 1: General Guidelines */}
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <ShieldAlert className="h-5 w-5" />
                </span>
                <h2 className="font-serif text-2xl text-cream">General Guidelines</h2>
              </div>
              <ul className="space-y-3 text-sm text-[#B3B3B3] leading-relaxed pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>All clothes are handled with the utmost care, but laundry/washing is done at the customer's own risk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>TS Unique Laundry is not responsible for color fading, shrinkage, or damage caused by manufacturer defects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Items with pre-existing damage or weak fabric may not withstand the washing process.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Please check all pockets before submitting laundry; TS Unique Laundry is not liable for lost or damaged items left inside.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Stains will be treated to the best of professional ability, but complete removal cannot be guaranteed.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Section 2: Special Items */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-line bg-surface p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <h2 className="font-serif text-2xl text-cream">Special Items</h2>
              </div>
              <ul className="space-y-3 text-sm text-[#B3B3B3] leading-relaxed pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Delicate fabrics require special handling and may incur additional charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Leather, suede, and specialty materials are washed at the customer's risk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Curtains, towels, white items, bags, blankets, and large items may require extended processing time.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Section 3: Collection and Delivery */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-surface p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Truck className="h-5 w-5" />
                </span>
                <h2 className="font-serif text-2xl text-cream">Collection and Delivery</h2>
              </div>
              <ul className="space-y-3 text-sm text-[#B3B3B3] leading-relaxed pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>TS Unique Laundry will only deliver or collect your laundry between <b>6:00 PM and 8:00 PM (18:00 – 20:00)</b>; however, the customer is welcome to bring or collect their laundry at business address (85 Matlala St, Palime, Katlehong, 1431) from <b>7:00 AM till 7:00 PM (07:00 – 19:00)</b>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>An amount of <b>R50 collection/delivery fee</b> will be charged upon <b>CANCELLATION</b> of services.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Section 4: Liability */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-line bg-surface p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <FileText className="h-5 w-5" />
                </span>
                <h2 className="font-serif text-2xl text-cream">Liability</h2>
              </div>
              <ul className="space-y-3 text-sm text-[#B3B3B3] leading-relaxed pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Compensation for lost or damaged items will not exceed <b>three times (3x)</b> the laundry charge of the specific item.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Proof of receipt is required for any claim.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Unclaimed items after <b>30 days</b> will be considered abandoned and may be donated or disposed of.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>By settling your invoice you legally acknowledge and agree that the quantity of the laundry item listed on the invoice is correct.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Lost items must be claimed within <b>2 days</b>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>TS Unique Laundry is not responsible for items damaged or lost due to natural disasters or fire.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Full payment of the invoice is required prior to the release of the laundry to the customer.</span>
                </li>
              </ul>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
