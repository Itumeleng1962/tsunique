import { BRAND } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

// Floating WhatsApp button with the recognizable brand logo
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-button"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
