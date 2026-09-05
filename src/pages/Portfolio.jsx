import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   Image data – categorised from analysis
───────────────────────────────────────── */
const CATEGORIES = [
  { id: "all",           label: "All Work",         icon: "✦" },
  { id: "before-after",  label: "Before & After",   icon: "🔄" },
  { id: "fold",          label: "Wash, Dry & Fold",  icon: "👕" },
  { id: "dry-cleaning",  label: "Dry Cleaning",     icon: "👔" },
  { id: "blankets",      label: "Blankets & Duvets", icon: "🛏️" },
  { id: "small-items",   label: "Small Items",      icon: "🧦" },
];

const ITEMS = [
  {
    id: 1,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.38 (1).jpeg",
    category: "before-after",
    title: "Clothes – Before & After",
    description: "Dirty laundry in a blue bag, transformed into neatly folded & sealed packs.",
    badge: "Before & After",
  },
  {
    id: 2,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.39.jpeg",
    category: "before-after",
    title: "Blankets – Before & After",
    description: "Crumpled duvets turned into freshly cleaned, neatly wrapped bundles.",
    badge: "Before & After",
  },
  {
    id: 3,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.38.jpeg",
    category: "before-after",
    title: "Laundry Basket Ready for Pick-up",
    description: "A full laundry basket received and sorted before the wash cycle.",
    badge: "Before & After",
  },
  {
    id: 4,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.31.jpeg",
    category: "fold",
    title: "Folded & Packaged on Shelf",
    description: "Mixed wardrobe — folded, sealed in clear plastic and ready for collection.",
    badge: "Wash, Dry & Fold",
  },
  {
    id: 5,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.33.jpeg",
    category: "fold",
    title: "Bulk Order – Sealed & Delivered",
    description: "A large order carefully folded and vacuum-sealed with a Thank You note.",
    badge: "Wash, Dry & Fold",
  },
  {
    id: 6,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.34.jpeg",
    category: "fold",
    title: "Uniform Workwear – Fold & Stack",
    description: "Navy work uniforms washed, stacked and sealed, ready for the week ahead.",
    badge: "Wash, Dry & Fold",
  },
  {
    id: 7,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.35 (1).jpeg",
    category: "fold",
    title: "T-Shirts & Jeans – Perfectly Stacked",
    description: "Colourful tops and dark jeans folded with precision and neatly stacked.",
    badge: "Wash, Dry & Fold",
  },
  {
    id: 8,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.37.jpeg",
    category: "fold",
    title: "Mixed Wardrobe – Fold & Pack",
    description: "Sweaters, shirts and towels presented with the TS Unique Thank You card.",
    badge: "Wash, Dry & Fold",
  },
  {
    id: 9,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.35.jpeg",
    category: "dry-cleaning",
    title: "Dress Shirts – Ironed & Hung",
    description: "A white dress shirt and printed shirt pressed, hung and covered in protective plastic.",
    badge: "Dry Cleaning",
  },
  {
    id: 10,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.36.jpeg",
    category: "dry-cleaning",
    title: "Shirts & Socks – Cleaned & Packaged",
    description: "Ironed dress shirts hung alongside packaged socks — all ready for the week.",
    badge: "Dry Cleaning",
  },
  {
    id: 11,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.36 (1).jpeg",
    category: "dry-cleaning",
    title: "Customer Order – Bulk Collection",
    description: "Multiple sealed packages and a laundry basket collected in one efficient pickup.",
    badge: "Dry Cleaning",
  },
  {
    id: 12,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.36 (2).jpeg",
    category: "dry-cleaning",
    title: "Blanket & Mixed Order – Packaged",
    description: "A grey knit blanket and mixed clothing order sealed and tagged with a Thank You card.",
    badge: "Dry Cleaning",
  },
  {
    id: 13,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.40.jpeg",
    category: "blankets",
    title: "Blankets – Washed & Wrapped",
    description: "Two large blankets — a green-stripe and a polka-dot — cleaned and sealed.",
    badge: "Blankets & Duvets",
  },
  {
    id: 14,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.32 (1).jpeg",
    category: "small-items",
    title: "Socks – Washed & Paired",
    description: "Eight pairs of socks (Nike, Adidas & branded) washed, paired and laid out.",
    badge: "Small Items",
  },
  {
    id: 15,
    src: "/Pics/WhatsApp Image 2026-08-26 at 20.35.32.jpeg",
    category: "small-items",
    title: "Socks & Underwear – Packaged",
    description: "Socks and undergarments cleaned, sorted and sealed in clear plastic.",
    badge: "Small Items",
  },
];

/* ─────────────────────────────────────────
   Lightbox component
───────────────────────────────────────── */
function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
        style={{ background: "var(--c-surface)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Badge */}
        <span
          className="absolute top-4 left-4 z-10 text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: "var(--gold)", color: "#fff", letterSpacing: "0.06em" }}
        >
          {item.badge}
        </span>

        {/* Close */}
        <button
          onClick={onClose}
          id="lightbox-close-btn"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all"
          style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={item.src}
          alt={item.title}
          className="w-full object-cover"
          style={{ maxHeight: "65vh" }}
        />

        {/* Caption */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1" style={{ color: "var(--c-text)" }}>
            {item.title}
          </h3>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            {item.description}
          </p>
        </div>

        {/* Prev / Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          id="lightbox-prev-btn"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all hover:scale-110"
          style={{ background: "rgba(0,0,0,0.55)" }}
        >
          ‹
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          id="lightbox-next-btn"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all hover:scale-110"
          style={{ background: "rgba(0,0,0,0.55)" }}
        >
          ›
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Portfolio Card
───────────────────────────────────────── */
function PortfolioCard({ item, index, onClick }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: -10 }}
      transition={{ duration: 0.38, delay: index * 0.055, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => onClick(item)}
      id={`portfolio-card-${item.id}`}
      className="group relative cursor-pointer rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        border: "1px solid var(--c-border)",
        background: "var(--c-surface)",
      }}
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden" style={{ paddingBottom: "72%" }}>
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
          }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={{ background: "var(--gold)", color: "#fff", letterSpacing: "0.06em" }}
        >
          {item.badge}
        </span>
        <div
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{ background: "rgba(255,255,255,0.92)", color: "var(--gold)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="p-4">
        <h3
          className="font-bold text-sm leading-snug mb-1 transition-colors duration-200 group-hover:text-[#c89d2a]"
          style={{ color: "var(--c-text)" }}
        >
          {item.title}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--muted-foreground)" }}>
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────
   Main Portfolio Page
───────────────────────────────────────── */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxItem, setLightboxItem] = useState(null);
  const searchRef = useRef(null);

  const filtered = ITEMS.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const currentIndex = lightboxItem ? filtered.findIndex((i) => i.id === lightboxItem.id) : -1;
  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  const prevItem = () => { if (currentIndex > 0) setLightboxItem(filtered[currentIndex - 1]); };
  const nextItem = () => { if (currentIndex < filtered.length - 1) setLightboxItem(filtered[currentIndex + 1]); };

  return (
    <>
      {/* ── Hero banner ── */}
      <section
        className="relative pt-24 pb-16 overflow-hidden noise"
        style={{ background: "linear-gradient(135deg, #0b0b0b 0%, #1a1306 50%, #0b0b0b 100%)" }}
      >
        <div
          className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #c89d2a 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #c89d2a 0%, transparent 70%)" }}
        />

        <div className="container-x relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(200,157,42,0.15)", color: "#c89d2a", border: "1px solid rgba(200,157,42,0.3)" }}
            >
              Our Work
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance" style={{ color: "#f4f1ea" }}>
              Portfolio &amp; Gallery
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(244,241,234,0.6)" }}>
              Real results from real clients — every garment handled with care, every order delivered with pride.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-10"
          >
            {[
              { label: "Orders Completed", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Services Offered", value: "5+" },
              { label: "Years of Excellence", value: "3+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold font-serif" style={{ color: "#c89d2a" }}>{stat.value}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(244,241,234,0.5)" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter & Search toolbar ── */}
      <section
        className="sticky top-0 z-40 py-4"
        style={{ background: "var(--glass-nav)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--c-border)" }}
      >
        <div className="container-x">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
                  style={
                    activeCategory === cat.id
                      ? { background: "#c89d2a", color: "#fff", boxShadow: "0 2px 12px rgba(200,157,42,0.4)" }
                      : { background: "var(--c-surface)", color: "var(--c-text)", border: "1px solid var(--c-border)" }
                  }
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span
                    className="ml-0.5 text-[10px] px-1.5 py-0.5 rounded-full"
                    style={{
                      background: activeCategory === cat.id ? "rgba(255,255,255,0.25)" : "var(--c-border)",
                      color: activeCategory === cat.id ? "#fff" : "var(--muted-foreground)",
                    }}
                  >
                    {cat.id === "all" ? ITEMS.length : ITEMS.filter((i) => i.category === cat.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64 shrink-0">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchRef}
                id="portfolio-search"
                type="text"
                placeholder="Search photos…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-xl outline-none transition-all"
                style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", color: "var(--c-text)" }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-40 hover:opacity-80">✕</button>
              )}
            </div>
          </div>

          <p className="text-xs mt-3" style={{ color: "var(--muted-foreground)" }}>
            Showing <span className="font-semibold" style={{ color: "#c89d2a" }}>{filtered.length}</span> of {ITEMS.length} photos
            {searchQuery && <span> for "<em>{searchQuery}</em>"</span>}
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container-x py-12">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((item, i) => (
                <PortfolioCard key={item.id} item={item} index={i} onClick={openLightbox} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--c-text)" }}>No photos found</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Try a different search term or filter category.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:opacity-80"
                style={{ background: "#c89d2a", color: "#fff" }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-16 noise" style={{ background: "linear-gradient(135deg, #0b0b0b 0%, #1a1306 50%, #0b0b0b 100%)" }}>
        <div className="container-x text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#f4f1ea" }}>
            Ready for Fresh, Perfectly Clean Laundry?
          </h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(244,241,234,0.6)" }}>
            Join hundreds of satisfied clients. Book your first collection today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" id="portfolio-cta-contact" className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ background: "#c89d2a", color: "#fff" }}>
              Book a Collection
            </a>
            <a href="/pricing" id="portfolio-cta-pricing" className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ background: "rgba(244,241,234,0.08)", color: "#f4f1ea", border: "1px solid rgba(244,241,234,0.2)" }}>
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={closeLightbox} onPrev={prevItem} onNext={nextItem} />
        )}
      </AnimatePresence>
    </>
  );
}
