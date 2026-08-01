import { Reveal } from "./Motion";

// Editorial section heading: gold eyebrow, serif title, muted lede.
export function SectionHeading({ eyebrow, title, lede, center = false, dark = false }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/60" : "text-[#9A9A9A]"}`}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
