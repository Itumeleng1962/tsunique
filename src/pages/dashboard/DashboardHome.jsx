import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell,
} from "recharts";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { DashHeader, StatCard, Panel, StatusPill } from "@/components/dashboard/Widgets";
import { Reveal } from "@/components/common/Motion";
import { CURRENT_USER, USAGE_TREND, SERVICE_SPLIT, LAUNDRY_HISTORY, NOTIFICATIONS } from "@/data/dashboard";
import { ZAR } from "@/lib/utils";

const GOLD = "#C89D2A";
const COLORS = ["#C89D2A", "#111111", "#B8B8B8", "#E4CE8F"];

export default function DashboardHome() {
  const u = CURRENT_USER;
  const washesLeft = u.washesTotal - u.washesUsed;
  const kgPct = Math.round((u.kgUsed / u.kgIncluded) * 100);

  return (
    <>
      <DashHeader title={`Welcome back, ${u.name.split(" ")[0]}`} subtitle="Here's your laundry at a glance." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal><StatCard testid="stat-remaining-washes" label="Remaining collections" value={`${washesLeft}/${u.washesTotal}`} sub={`Renews ${u.renews}`} accent /></Reveal>
        <Reveal delay={0.05}><StatCard testid="stat-current-plan" label="Current plan" value={u.plan} sub={`${ZAR(u.planPrice)}/month`} /></Reveal>
        <Reveal delay={0.1}><StatCard testid="stat-kg-used" label="Kg used this month" value={`${u.kgUsed}kg`} sub={`of ${u.kgIncluded}kg`} /></Reveal>
        <Reveal delay={0.15}><StatCard testid="stat-referral" label="Referral credit" value={ZAR(u.referralCredits)} sub={u.referralCode} /></Reveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Panel title="Monthly usage (kg)">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={USAGE_TREND} margin={{ left: -20, right: 8, top: 8 }}>
                <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={GOLD} stopOpacity={0.3} /><stop offset="100%" stopColor={GOLD} stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #2A2A2A" }} />
                <Area type="monotone" dataKey="kg" stroke={GOLD} strokeWidth={2.5} fill="url(#g)" />
              </AreaChart>
            </ResponsiveContainer>
          </Panel>
        </Reveal>

        <Reveal delay={0.1}>
          <Panel title="Plan usage">
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-sm"><span className="text-[#9A9A9A]">Kilograms</span><span className="font-medium text-cream">{kgPct}%</span></div>
                <Progress value={kgPct} className="h-2 bg-cloud [&>div]:bg-gold" />
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={SERVICE_SPLIT} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={3}>
                    {SERVICE_SPLIT.map((e, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #2A2A2A" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5">
                {SERVICE_SPLIT.map((s, i) => (
                  <div key={s.name} className="flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-[#9A9A9A]"><span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />{s.name}</span><span className="font-medium text-cream">{s.value}%</span></div>
                ))}
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Panel title="Recent orders" action={<Link to="/dashboard/history" className="inline-flex items-center gap-1 text-sm font-medium text-gold">View all <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} /></Link>}>
            <div className="space-y-3">
              {LAUNDRY_HISTORY.slice(0, 4).map((o) => (
                <div key={o.id} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                  <div><p className="text-sm font-medium text-cream">{o.service}</p><p className="text-xs text-[#9A9A9A]">{o.id} · {o.date} · {o.kg}kg</p></div>
                  <StatusPill status={o.status} />
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-6">
            <Panel title="Notifications">
              <div className="space-y-3">
                {NOTIFICATIONS.slice(0, 3).map((n) => (
                  <div key={n.id} className="flex items-start gap-3">
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${n.unread ? "bg-gold" : "bg-line"}`} />
                    <div><p className="text-sm text-cream">{n.title}</p><p className="text-xs text-[#9A9A9A]">{n.time}</p></div>
                  </div>
                ))}
              </div>
            </Panel>
            <div className="rounded-2xl border border-gold bg-gold/5 p-6">
              <Gift className="h-6 w-6 text-gold" strokeWidth={1.25} />
              <p className="mt-3 font-serif text-lg text-cream">Give R60, get R60</p>
              <p className="mt-1 text-xs text-[#9A9A9A]">Share your code and earn credit on every friend who joins.</p>
              <Link to="/dashboard/referrals" className="mt-4 inline-block rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-white">Invite friends</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
