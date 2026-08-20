import { Link } from "react-router-dom";
import { Facebook, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { Logo } from "@/components/common/Logo";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

// TikTok brand glyph (not available in lucide-react)
function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3c.3 2.1 1.5 3.5 3.6 3.7v2.4c-1.2.1-2.3-.3-3.6-1v5.8c0 3.4-2.7 5.9-6 5.9a5.7 5.7 0 0 1-5.7-5.7 5.7 5.7 0 0 1 6.6-5.6v2.6a3 3 0 0 0-1 -.2 3 3 0 1 0 3 3V3h2.5z" />
    </svg>
  );
}

const SOCIALS = [
  { Icon: TikTokIcon, href: BRAND.socials.tiktok, label: "TikTok" },
  { Icon: Facebook, href: BRAND.socials.facebook, label: "Facebook" },
  { Icon: WhatsAppIcon, href: BRAND.socials.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-ink text-white" data-testid="main-footer">
      <div className="container-x relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              {BRAND.slogan}. Premium laundry and subscription care, collected and delivered across
              greater Katlehong.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company">
            {NAV_LINKS.slice(0, 5).map((l) => (
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICES.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Get in touch">
            <li className="flex items-start gap-2.5 text-sm text-white/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              {BRAND.address}
            </li>
            <li>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} /> {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} /> {BRAND.email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="group mt-2 inline-flex items-center gap-1 text-sm font-medium text-gold">
                Book a pickup
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </Link>
            </li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/disclaimer" className="transition-colors hover:text-white">Disclaimer</Link>
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-sm text-white/50 transition-colors hover:text-gold">{children}</Link>
    </li>
  );
}
