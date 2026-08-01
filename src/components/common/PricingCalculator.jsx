import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PRICING } from "@/data/plans";
import { ZAR } from "@/lib/utils";

const TYPES = [
  { key: "washFold", label: "Wash & Fold" },
  { key: "washIronFold", label: "Wash, Iron & Fold" },
  { key: "ironOnly", label: "Iron Only" },
];

// Live per-kilogram pricing calculator
export function PricingCalculator() {
  const [kg, setKg] = useState([8]);
  const [type, setType] = useState("washFold");
  const [express, setExpress] = useState(false);
  const [delivery, setDelivery] = useState(true);

  const { subtotal, expressCost, deliveryCost, total } = useMemo(() => {
    const weight = kg[0];
    const base = PRICING.base[type] * weight;
    const exp = express ? PRICING.addons.express : 0;
    const sub = base + exp;
    const del = delivery ? PRICING.addons.delivery : 0;
    return { subtotal: base, expressCost: exp, deliveryCost: del, total: sub + del };
  }, [kg, type, express, delivery]);

  return (
    <div
      className="glass-card overflow-hidden rounded-3xl border border-line shadow-[0_16px_60px_rgba(0,0,0,0.06)]"
      data-testid="pricing-calculator"
    >
      <div className="grid lg:grid-cols-2">
        {/* Controls */}
        <div className="space-y-8 p-8 lg:p-10">
          <div>
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A9A9A]">Service type</label>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setType(t.key)}
                  data-testid={`calc-type-${t.key}`}
                  className={`rounded-xl border px-2 py-3 text-xs font-medium leading-tight transition-all ${
                    type === t.key
                      ? "border-gold bg-gold/10 text-cream"
                      : "border-line bg-surface text-[#9A9A9A] hover:border-ink/30"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A9A9A]">Weight</label>
              <span className="font-serif text-2xl text-cream">{kg[0]} kg</span>
            </div>
            <Slider
              value={kg}
              onValueChange={setKg}
              min={1}
              max={50}
              step={1}
              className="mt-5"
              data-testid="calc-weight-slider"
            />
            <div className="mt-2 flex justify-between text-xs text-[#9A9A9A]">
              <span>1 kg</span><span>50 kg</span>
            </div>
          </div>

          <div className="space-y-3">
            <Toggle checked={express} onChange={setExpress} label="Express (same day)" note={`+${ZAR(PRICING.addons.express)} flat`} testid="calc-express" />
            <Toggle checked={delivery} onChange={setDelivery} label="Collection & delivery" note={`Free within ${PRICING.deliveryFreeKm}km · else ${ZAR(PRICING.addons.delivery)}`} testid="calc-delivery" />
          </div>
        </div>

        {/* Summary */}
        <div className="noise relative flex flex-col justify-between bg-ink p-8 text-white lg:p-10">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Estimate</span>
            <Row label={`${TYPES.find((t) => t.key === type).label} · ${kg[0]}kg`} value={ZAR(subtotal)} />
            {expressCost > 0 && <Row label="Express surcharge" value={ZAR(expressCost)} />}
            <Row label="Delivery" value={deliveryCost === 0 ? "Free" : ZAR(deliveryCost)} />
          </div>
          <div className="relative z-10 mt-8 border-t border-white/15 pt-6">
            <div className="flex items-end justify-between">
              <span className="text-sm text-white/60">Total estimate</span>
              <span className="font-serif text-5xl font-light text-white" data-testid="calc-total">{ZAR(total)}</span>
            </div>
            <Link
              to="/register"
              data-testid="calc-book-button"
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-surface hover:text-cream"
            >
              Book this order
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Toggle({ checked, onChange, label, note, testid }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      data-testid={testid}
      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${
        checked ? "border-gold bg-gold/5" : "border-line bg-surface hover:border-ink/20"
      }`}
    >
      <div>
        <p className="text-sm font-medium text-cream">{label}</p>
        <p className="text-xs text-[#9A9A9A]">{note}</p>
      </div>
      <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${checked ? "border-gold bg-gold text-white" : "border-line"}`}>
        {checked && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
      </span>
    </button>
  );
}
