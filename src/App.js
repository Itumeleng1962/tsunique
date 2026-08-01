import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@/App.css";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Eager marketing pages (fast first paint)
import Home from "@/pages/Home";

// Lazy-loaded routes for code splitting
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Subscriptions = lazy(() => import("@/pages/Subscriptions"));
const HowItWorks = lazy(() => import("@/pages/HowItWorks"));
const About = lazy(() => import("@/pages/About"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));

const DashboardHome = lazy(() => import("@/pages/dashboard/DashboardHome"));

function Fallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cloud">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold" />
    </div>
  );
}

function RequireAuth({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} replace />;
  return children;
}

function AppRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        {/* Marketing */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<LegalPrivacy />} />
          <Route path="/terms" element={<LegalTerms />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Customer dashboard */}
        <Route path="/dashboard" element={<RequireAuth role="customer"><DashboardLayout /></RequireAuth>}>
          <Route index element={<DashboardHome />} />
          <Route path="history" element={<CustHistory />} />
          <Route path="invoices" element={<CustInvoices />} />
          <Route path="payments" element={<CustPayments />} />
          <Route path="notifications" element={<CustNotifications />} />
          <Route path="referrals" element={<CustReferrals />} />
          <Route path="profile" element={<CustProfile />} />
        </Route>

        {/* Admin dashboard */}
        <Route path="/admin" element={<RequireAuth role="admin"><DashboardLayout admin /></RequireAuth>}>
          <Route index element={<AdmHome />} />
          <Route path="customers" element={<AdmCustomers />} />
          <Route path="orders" element={<AdmOrders />} />
          <Route path="content" element={<AdmContent />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

// Helper to render a named export from a lazily imported module
function makeNamed(loader, name) {
  return lazy(() => loader().then((m) => ({ default: m[name] })));
}

// Legal pages share one module with a `type` prop
const PrivacyComp = makeNamed(() => import("@/pages/Legal").then((m) => ({ Legal: () => <m.Legal type="privacy" /> })), "Legal");
const TermsComp = makeNamed(() => import("@/pages/Legal").then((m) => ({ Legal: () => <m.Legal type="terms" /> })), "Legal");
function LegalPrivacy() { return <PrivacyComp />; }
function LegalTerms() { return <TermsComp />; }

// Customer named-export pages
const CustHistory = makeNamed(() => import("@/pages/dashboard/CustomerPages"), "History");
const CustInvoices = makeNamed(() => import("@/pages/dashboard/CustomerPages"), "Invoices");
const CustPayments = makeNamed(() => import("@/pages/dashboard/CustomerPages"), "Payments");
const CustNotifications = makeNamed(() => import("@/pages/dashboard/CustomerPages"), "Notifications");
const CustReferrals = makeNamed(() => import("@/pages/dashboard/CustomerPages"), "Referrals");
const CustProfile = makeNamed(() => import("@/pages/dashboard/CustomerPages"), "Profile");

const AdmHome = makeNamed(() => import("@/pages/dashboard/AdminPages"), "AdminHome");
const AdmCustomers = makeNamed(() => import("@/pages/dashboard/AdminPages"), "AdminCustomers");
const AdmOrders = makeNamed(() => import("@/pages/dashboard/AdminPages"), "AdminOrders");
const AdmContent = makeNamed(() => import("@/pages/dashboard/AdminPages"), "AdminContent");

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
        <AuthProvider>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <AppRoutes />
          </AnimatePresence>
          <Toaster position="top-center" />
        </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
