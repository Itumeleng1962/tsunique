import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CreditCard, Smartphone, Building, CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import { toast } from "sonner";
import { ZAR } from "@/lib/utils";

export function PaymentModal({ isOpen, onClose, item, type = "subscription" }) {
  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("Payment Successful!", {
        description: `Automated receipt sent to your email. Invoice #${Math.floor(100000 + Math.random() * 900000)} generated.`,
      });
    }, 1500);
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  if (!item) return null;

  const title = type === "subscription" ? item.name || "Subscription Plan" : item.title || "Custom Laundry Order";
  const amount = type === "subscription" ? item.price : item.total || item.from || 250;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] border-line bg-surface p-6 text-cream rounded-3xl">
        {!success ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                <ShieldCheck className="h-4 w-4" /> Secure Payment Gateway
              </div>
              <DialogTitle className="font-serif text-2xl text-cream mt-1">{title}</DialogTitle>
              <DialogDescription className="text-xs text-[#9A9A9A]">
                Total Due Now: <span className="font-semibold text-cream text-base">{ZAR(amount)}</span>
              </DialogDescription>
            </DialogHeader>

            {/* Payment Method Selector */}
            <div className="my-4 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setMethod("card")}
                className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition-all ${
                  method === "card" ? "border-gold bg-gold/10 text-cream" : "border-line bg-cloud/50 text-[#9A9A9A] hover:border-ink/20"
                }`}
              >
                <CreditCard className="h-5 w-5 text-gold" />
                <span>Card</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod("eft")}
                className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition-all ${
                  method === "eft" ? "border-gold bg-gold/10 text-cream" : "border-line bg-cloud/50 text-[#9A9A9A] hover:border-ink/20"
                }`}
              >
                <Building className="h-5 w-5 text-gold" />
                <span>Instant EFT</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod("mobile")}
                className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition-all ${
                  method === "mobile" ? "border-gold bg-gold/10 text-cream" : "border-line bg-cloud/50 text-[#9A9A9A] hover:border-ink/20"
                }`}
              >
                <Smartphone className="h-5 w-5 text-gold" />
                <span>Mobile Pay</span>
              </button>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              {method === "card" && (
                <>
                  <div>
                    <label className="text-xs font-medium text-[#9A9A9A]">Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="4000 1234 5678 9010"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-cream placeholder-[#666] focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-[#9A9A9A]">Expiry Date</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-cream placeholder-[#666] focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[#9A9A9A]">CVV</label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-cream placeholder-[#666] focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {method === "eft" && (
                <div className="rounded-xl border border-line bg-cloud/40 p-4 text-xs text-[#9A9A9A] space-y-2">
                  <p className="font-semibold text-cream">Supported Banks for Instant EFT:</p>
                  <p>Capitec, FNB, Standard Bank, Absa, Nedbank, TymeBank, Discovery Bank.</p>
                  <p className="text-[11px] italic">You will be securely redirected to your bank to authorize Instant EFT.</p>
                </div>
              )}

              {method === "mobile" && (
                <div className="rounded-xl border border-line bg-cloud/40 p-4 text-xs text-[#9A9A9A] space-y-2">
                  <p className="font-semibold text-cream">Mobile Wallet Options:</p>
                  <p>SnapScan, Zapper, Apple Pay, Google Pay.</p>
                  <p className="text-[11px] italic">Scan the payment QR code from your mobile app upon clicking submit.</p>
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-[#9A9A9A] pt-2">
                <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5 text-gold" /> 256-Bit SSL Encrypted</span>
                <span>PayFast / Ozow Verified</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-white transition-all hover:bg-surface hover:text-cream disabled:opacity-50"
              >
                {loading ? "Processing Payment..." : `Pay ${ZAR(amount)} Now`}
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-2xl text-cream">Payment Confirmed!</h3>
            <p className="text-xs text-[#9A9A9A] max-w-xs mx-auto">
              Your subscription for <strong className="text-cream">{title}</strong> is now active. An invoice and wash allowance have been credited to your Customer Portal.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 rounded-full bg-gold px-8 py-3 text-xs font-semibold text-white hover:bg-surface hover:text-cream"
            >
              Done & View Portal
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
