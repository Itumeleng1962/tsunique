import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { PageTransition } from "@/components/common/Motion";

// Public marketing shell: sticky nav + footer + floating WhatsApp
export function MarketingLayout() {
  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
