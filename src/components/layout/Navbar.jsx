import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashHref = user?.role === "admin" ? "/admin" : "/dashboard";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav border-b border-line/60 py-3" : "bg-transparent py-5"
      }`}
      data-testid="main-navbar"
    >
      <nav className="container-x flex items-center justify-between">
        <Logo dark={!scrolled} size="lg" />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `gold-underline text-sm font-medium transition-colors ${
                  isActive ? "text-gold" : "text-cream/80 hover:text-cream"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          {user ? (
            <button
              onClick={() => navigate(dashHref)}
              data-testid="nav-dashboard-button"
              className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold"
            >
              Dashboard
            </button>
          ) : (
            <>
              <Link
                to="/login"
                data-testid="nav-login-link"
                className={`text-sm font-medium transition-colors ${scrolled ? "text-cream/80 hover:text-cream" : "text-white/80 hover:text-white"}`}
              >
                Sign in
              </Link>
              <Link
                to="/register"
                data-testid="nav-register-button"
                className="group inline-flex items-center gap-1 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gold"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
            className={scrolled ? "text-cream" : "text-white"}
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-nav overflow-hidden border-t border-line/60 lg:hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? "bg-gold/10 text-gold" : "text-cream hover:bg-cloud"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-3 flex gap-3 border-t border-line pt-4">
                <Link to="/login" onClick={() => setOpen(false)} className="flex-1 rounded-full border border-line py-3 text-center text-sm font-medium">
                  Sign in
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-ink py-3 text-center text-sm font-medium text-white">
                  Get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
