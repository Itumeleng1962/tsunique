import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { IMAGES } from "@/lib/constants";

// Split-screen auth shell: form left, editorial visual right
export function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen bg-surface lg:grid lg:grid-cols-2">
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto w-full max-w-md">
          <Logo />
          <h1 className="mt-12 font-serif text-4xl font-light text-cream">{title}</h1>
          <p className="mt-3 text-[#9A9A9A]">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-8 text-center text-sm text-[#9A9A9A]">{footer}</div>}
        </motion.div>
      </div>

      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <img src={IMAGES.heroTowels} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end p-16 text-white">
          <Quote className="h-12 w-12 text-gold" strokeWidth={1} />
          <blockquote className="mt-6 font-serif text-3xl font-light leading-snug">"I honestly forgot laundry was a chore. It vanishes and reappears folded like a boutique hotel."</blockquote>
          <p className="mt-6 text-sm text-white/60">Naledi Mokoena · Family plan member</p>
          <Link to="/" className="mt-10 text-xs uppercase tracking-widest text-gold">← Back to website</Link>
        </div>
      </div>
    </div>
  );
}
