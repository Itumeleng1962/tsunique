import { useState } from "react";
import { MessageSquare, QrCode, Truck, Gift, Smartphone, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function Phase2Showcase() {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [qrCode, setQrCode] = useState("TS-LNDRY-892401");

  return (
    <section className="py-20 bg-cloud/30 border-y border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Phase 2 Innovation Roadmap
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream">Next-Gen Laundry Technology</h2>
          <p className="text-sm text-[#9A9A9A]">
            Explore upcoming feature enhancements designed to make garment management completely friction-free.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { id: "whatsapp", label: "WhatsApp Bot & Support", icon: MessageSquare },
            { id: "qr", label: "QR Code Check-In", icon: QrCode },
            { id: "pickup", label: "Pickup & Driver Tracking", icon: Truck },
            { id: "loyalty", label: "Loyalty & Rewards", icon: Gift },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "border-gold bg-gold text-white shadow-lg shadow-gold/20"
                    : "border-line bg-surface text-[#9A9A9A] hover:border-ink/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Displays */}
        <div className="mt-8 max-w-4xl mx-auto glass-card rounded-3xl border border-line p-8 lg:p-10">
          {activeTab === "whatsapp" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">AI Assistant</span>
                <h3 className="font-serif text-2xl text-cream">WhatsApp AI Laundry Assistant</h3>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  Book collections, check remaining wash balance, and receive drop-off notifications right inside WhatsApp with zero app installations.
                </p>
                <button
                  onClick={() => toast.info("Opening WhatsApp Demo Sandbox...")}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-semibold text-white hover:bg-surface hover:text-cream"
                >
                  <MessageSquare className="h-4 w-4" /> Launch WhatsApp Demo
                </button>
              </div>
              <div className="rounded-2xl border border-line bg-ink p-4 space-y-3 font-sans text-xs">
                <div className="bg-surface/80 p-3 rounded-xl rounded-tl-none border border-line max-w-[80%] text-cream">
                  👋 Hi! I want to check my remaining wash allowance for the Family Plan.
                </div>
                <div className="bg-gold/20 p-3 rounded-xl rounded-tr-none border border-gold/30 ml-auto max-w-[85%] text-gold">
                  ✨ Hi Naledi! You have <strong>24.5 kg</strong> and <strong>2 washes</strong> remaining in your current cycle. Would you like to schedule a pickup for tomorrow?
                </div>
              </div>
            </div>
          )}

          {activeTab === "qr" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Self Service</span>
                <h3 className="font-serif text-2xl text-cream">Express Store QR Check-In</h3>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  Scan your unique customer QR code at our store counter for 10-second express bag drop-off without waiting in line.
                </p>
                <button
                  onClick={() => {
                    const newCode = `TS-LNDRY-${Math.floor(100000 + Math.random() * 900000)}`;
                    setQrCode(newCode);
                    toast.success("New Customer QR Token Generated!");
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-semibold text-white hover:bg-surface hover:text-cream"
                >
                  <QrCode className="h-4 w-4" /> Refresh Customer Token
                </button>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border border-line bg-surface rounded-2xl text-center space-y-3">
                <div className="h-32 w-32 bg-cloud p-3 rounded-xl border border-line flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-gold" />
                </div>
                <p className="font-mono text-xs font-bold text-cream tracking-widest">{qrCode}</p>
                <span className="text-[10px] text-[#9A9A9A]">Scan at counter kiosk for instant intake</span>
              </div>
            </div>
          )}

          {activeTab === "pickup" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Doorstep Logistics</span>
                <h3 className="font-serif text-2xl text-cream">Driver Tracking & Slot Scheduler</h3>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  Choose precise 1-hour collection slots and track your laundry courier in real time on an interactive route map.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold border border-gold/20">Live GPS</span>
                  <span className="rounded-full bg-cloud px-3 py-1 text-[11px] font-semibold text-[#9A9A9A] border border-line">Contactless</span>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-cloud/40 p-6 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-line pb-3">
                  <span className="text-[#9A9A9A]">Driver Assigned:</span>
                  <span className="font-semibold text-cream">Sibusiso (Route #4)</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-line pb-3">
                  <span className="text-[#9A9A9A]">Estimated Pickup:</span>
                  <span className="font-semibold text-gold">Today @ 14:30 PM</span>
                </div>
                <div className="pt-2 flex items-center gap-2 text-xs text-cream">
                  <Smartphone className="h-4 w-4 text-gold animate-bounce" /> Live tracking notification sent to phone
                </div>
              </div>
            </div>
          )}

          {activeTab === "loyalty" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">Rewards</span>
                <h3 className="font-serif text-2xl text-cream">FreshPoints Loyalty & Referral Program</h3>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  Earn 10 FreshPoints for every R10 spent. Redeem points for free express upgrades, dry cleaning vouchers, or plan discounts.
                </p>
                <button
                  onClick={() => toast.success("R100 Discount Voucher Claimed!")}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-semibold text-white hover:bg-surface hover:text-cream"
                >
                  <Gift className="h-4 w-4" /> Claim Welcome 500 Points
                </button>
              </div>
              <div className="rounded-2xl border border-line bg-surface p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#9A9A9A]">Your FreshPoints Balance:</span>
                  <span className="font-serif text-3xl text-cream">750 PTS</span>
                </div>
                <div className="h-2.5 w-full bg-cloud rounded-full overflow-hidden">
                  <div className="h-full bg-gold w-[75%]" />
                </div>
                <p className="text-[11px] text-[#9A9A9A]">250 points away from a FREE Dry Cleaning Voucher</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
