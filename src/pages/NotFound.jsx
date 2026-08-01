import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-cloud px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-serif text-[8rem] font-light leading-none text-gold sm:text-[12rem]">404</p>
        <h1 className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">This page came out in the wash</h1>
        <p className="mt-4 max-w-md text-[#9A9A9A]">The page you're looking for has been folded away or never existed. Let's get you back home.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gold"><Home className="h-4 w-4" strokeWidth={1.75} /> Back home</Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-8 py-4 text-sm font-medium text-cream transition-colors hover:border-ink"><ArrowLeft className="h-4 w-4" strokeWidth={1.75} /> Our services</Link>
        </div>
      </motion.div>
    </section>
  );
}
