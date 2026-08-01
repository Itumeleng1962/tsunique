import { Link } from "react-router-dom";
import { BRAND } from "@/lib/constants";

const SIZES = {
  md: { img: "h-11 w-11", title: "text-xl", sub: "text-[9px]" },
  lg: { img: "h-16 w-16", title: "text-2xl", sub: "text-[10px]" },
};

// Official TS Unique Laundry eagle emblem used across the site.
export function Logo({ dark = false, size = "md", className = "" }) {
  const s = SIZES[size] || SIZES.md;
  return (
    <Link
      to="/"
      data-testid="brand-logo"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <img
        src={BRAND.logo}
        alt="TS Unique Laundry logo"
        className={`${s.img} shrink-0 rounded-full object-cover shadow-md ring-2 ring-gold/70 transition-transform duration-300 group-hover:scale-105`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-serif ${s.title} tracking-tight ${dark ? "text-white" : "text-cream"}`}>
          TS Unique
        </span>
        <span className={`${s.sub} font-semibold uppercase tracking-[0.3em] text-gold`}>
          Laundry · Est 2025
        </span>
      </span>
    </Link>
  );
}
