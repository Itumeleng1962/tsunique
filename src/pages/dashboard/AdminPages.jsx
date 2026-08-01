import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell,
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { DashHeader, Panel, StatusPill } from "@/components/dashboard/Widgets";
import { Reveal } from "@/components/common/Motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ADMIN_STATS, REVENUE_TREND, PLAN_DISTRIBUTION, ADMIN_CUSTOMERS, ADMIN_ORDERS,
} from "@/data/dashboard";
import { ZAR } from "@/lib/utils";
import { FAQS, TESTIMONIALS } from "@/data/content";

const COLORS = ["#C89D2A", "#111111", "#B8B8B8", "#E4CE8F", "#8A6D1E"];

export function AdminHome() {
  return (
    <>
      <DashHeader title="Analytics" subtitle="Business performance at a glance." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ADMIN_STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6" data-testid={`admin-stat-${i}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">{s.label}</p>
              <p className="mt-2 font-serif text-3xl font-light text-cream">{s.value}</p>
              <p className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${s.up ? "text-green-600" : "text-red-500"}`}>
                {s.up ? <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} /> : <TrendingDown className="h-3.5 w-3.5" strokeWidth={2} />}{s.delta}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Panel title="Revenue trend">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={REVENUE_TREND} margin={{ left: 0, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `R${v / 1000}k`} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #2A2A2A" }} formatter={(v) => ZAR(v)} />
                <Bar dataKey="revenue" fill="#C89D2A" radius={[8, 8, 0, 0]} maxBarSize={44} />
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </Reveal>
        <Reveal delay={0.1}>
          <Panel title="Plan distribution">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={PLAN_DISTRIBUTION} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {PLAN_DISTRIBUTION.map((e, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #2A2A2A" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-1.5">
              {PLAN_DISTRIBUTION.map((p, i) => (
                <div key={p.name} className="flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-[#9A9A9A]"><span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />{p.name}</span><span className="font-medium text-cream">{p.value}</span></div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </>
  );
}

export function AdminCustomers() {
  return (
    <>
      <DashHeader title="Customers" subtitle="Manage your subscriber base." />
      <Reveal>
        <Panel>
          <Table data-testid="admin-customers-table">
            <TableHeader><TableRow className="border-line hover:bg-transparent"><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Plan</TableHead><TableHead>Lifetime spend</TableHead><TableHead className="text-right">Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {ADMIN_CUSTOMERS.map((c) => (
                <TableRow key={c.email} className="border-line">
                  <TableCell className="font-medium text-cream">{c.name}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{c.email}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{c.plan}</TableCell>
                  <TableCell className="font-medium text-cream">{ZAR(c.spend)}</TableCell>
                  <TableCell className="text-right"><StatusPill status={c.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </Reveal>
    </>
  );
}

export function AdminOrders() {
  return (
    <>
      <DashHeader title="Orders" subtitle="Live order pipeline across all customers." />
      <Reveal>
        <Panel>
          <Table data-testid="admin-orders-table">
            <TableHeader><TableRow className="border-line hover:bg-transparent"><TableHead>Order</TableHead><TableHead>Customer</TableHead><TableHead>Service</TableHead><TableHead>Weight</TableHead><TableHead className="text-right">Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {ADMIN_ORDERS.map((o) => (
                <TableRow key={o.id} className="border-line">
                  <TableCell className="font-medium text-cream">{o.id}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.customer}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.service}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.kg}kg</TableCell>
                  <TableCell className="text-right"><StatusPill status={o.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </Reveal>
    </>
  );
}

export function AdminContent() {
  return (
    <>
      <DashHeader title="Content Management" subtitle="Manage FAQs, testimonials and promotions." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Panel title="FAQs" action={<button className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-white">+ Add</button>}>
            <div className="space-y-2">
              {FAQS.slice(0, 5).map((f, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-line px-4 py-3"><span className="text-sm text-cream">{f.q}</span><span className="text-xs text-gold">Edit</span></div>
              ))}
            </div>
          </Panel>
        </Reveal>
        <Reveal delay={0.1}>
          <Panel title="Testimonials" action={<button className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-white">+ Add</button>}>
            <div className="space-y-2">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="flex items-center gap-3 rounded-xl border border-line px-4 py-3">
                  <img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
                  <div className="flex-1"><p className="text-sm font-medium text-cream">{t.name}</p><p className="text-xs text-[#9A9A9A]">{t.role}</p></div>
                  <span className="text-xs text-gold">Edit</span>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </>
  );
}
