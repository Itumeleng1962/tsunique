import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Share2 } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
import { SEO } from "@/components/common/SEO";
import { BRAND } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  message: z.string().min(10, "Tell us a little more (min 10 characters)"),
});

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Message sent! We'll be in touch within a few hours.", { id: "contact-success" });
    reset();
  };

  return (
    <>
      <SEO title="Contact Us & Store Location" description="Get in touch with TS Unique Laundry Services in Katlehong. Contact form, operating hours, phone, email, and interactive Google Map." />

      <PageHero eyebrow="Get in touch" title="We'd love to hear from you" lede="Questions, subscription quotes or custom commercial inquiries — reach out and a real human will reply fast." />

      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <Reveal className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} label="Call us" value={BRAND.phone} href={`tel:${BRAND.phone}`} />
              <InfoCard icon={Mail} label="Email us" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <InfoCard icon={MapPin} label="Visit us" value={BRAND.address} />
              <InfoCard icon={MessageCircle} label="WhatsApp" value="Chat now" href={`https://wa.me/${BRAND.whatsapp}`} />
            </div>

            <div className="rounded-3xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2 text-gold"><Clock className="h-5 w-5" strokeWidth={1.5} /><span className="text-xs font-bold uppercase tracking-wider">Business operating hours</span></div>
              <ul className="mt-4 space-y-2">
                {BRAND.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm"><span className="text-[#9A9A9A]">{h.day}</span><span className="font-medium text-cream">{h.time}</span></li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="rounded-3xl border border-line bg-surface p-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5"><Share2 className="h-4 w-4" /> Connect On Social Media</span>
              <div className="flex gap-3 text-xs">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cloud border border-line px-4 py-2 text-cream hover:border-gold">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cloud border border-line px-4 py-2 text-cream hover:border-gold">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cloud border border-line px-4 py-2 text-cream hover:border-gold">LinkedIn</a>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-3xl border border-line bg-cloud" data-testid="map-embed">
              <iframe
                title="TS Unique Laundry location"
                src="https://www.google.com/maps?q=85+Matlala+Street,+Phadima,+Katlehong&z=15&output=embed"
                className="h-full w-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-line bg-surface p-8 lg:p-10" data-testid="contact-form">
              <h2 className="font-serif text-3xl font-light text-cream">Send an online inquiry</h2>
              <div className="mt-8 space-y-5">
                <Field label="Full name" error={errors.name}><input {...register("name")} data-testid="contact-name" className="input-field" placeholder="Your full name" /></Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email address" error={errors.email}><input {...register("email")} data-testid="contact-email" className="input-field" placeholder="you@email.co.za" /></Field>
                  <Field label="Phone number" error={errors.phone}><input {...register("phone")} data-testid="contact-phone" className="input-field" placeholder="+27 ..." /></Field>
                </div>
                <Field label="Message / Order Details" error={errors.message}><textarea {...register("message")} data-testid="contact-message" rows={5} className="input-field resize-none" placeholder="How can we assist you with laundry services or subscriptions?" /></Field>
                <button type="submit" disabled={isSubmitting} data-testid="contact-submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-surface hover:text-cream disabled:opacity-60">
                  {isSubmitting ? "Sending Inquiry..." : <>Submit Inquiry <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></>}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
      <style>{`.input-field{width:100%;border-radius:0.75rem;border:1px solid #2A2A2A;background:#161616;color:#F4F1EA;padding:0.85rem 1rem;font-size:0.9rem;outline:none;transition:border-color .2s}.input-field:focus{border-color:#C89D2A}`}</style>
    </>
  );
}

function InfoCard({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">{label}</p>
      <p className="mt-1 text-sm font-medium text-cream">{value}</p>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
