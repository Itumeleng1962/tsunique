import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Motion";
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
      <PageHero eyebrow="Get in touch" title="We'd love to hear from you" lede="Questions, quotes or a quick hello — reach out and a real human will reply fast." />
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
              <div className="flex items-center gap-2 text-gold"><Clock className="h-5 w-5" strokeWidth={1.5} /><span className="text-xs font-bold uppercase tracking-wider">Business hours</span></div>
              <ul className="mt-4 space-y-2">
                {BRAND.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm"><span className="text-[#9A9A9A]">{h.day}</span><span className="font-medium text-cream">{h.time}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl border border-line bg-cloud" data-testid="map-placeholder">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <MapPin className="h-8 w-8 text-gold" strokeWidth={1.25} />
                <p className="font-serif text-xl text-cream">Katlehong, Gauteng</p>
                <p className="text-xs text-[#9A9A9A]">Google Maps embed placeholder</p>
              </div>
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#111 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-line bg-surface p-8 lg:p-10" data-testid="contact-form">
              <h2 className="font-serif text-3xl font-light text-cream">Send a message</h2>
              <div className="mt-8 space-y-5">
                <Field label="Full name" error={errors.name}><input {...register("name")} data-testid="contact-name" className="input-field" placeholder="Your name" /></Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" error={errors.email}><input {...register("email")} data-testid="contact-email" className="input-field" placeholder="you@email.co.za" /></Field>
                  <Field label="Phone" error={errors.phone}><input {...register("phone")} data-testid="contact-phone" className="input-field" placeholder="+27 ..." /></Field>
                </div>
                <Field label="Message" error={errors.message}><textarea {...register("message")} data-testid="contact-message" rows={5} className="input-field resize-none" placeholder="How can we help?" /></Field>
                <button type="submit" disabled={isSubmitting} data-testid="contact-submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-gold disabled:opacity-60">
                  {isSubmitting ? "Sending..." : <>Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></>}
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
