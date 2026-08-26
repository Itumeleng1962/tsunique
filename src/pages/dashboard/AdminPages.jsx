import { useState } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell,
} from "recharts";
import { TrendingUp, TrendingDown, Plus, Edit2, Trash2, Mail, CheckCircle, PackageCheck } from "lucide-react";
import { DashHeader, Panel, StatusPill } from "@/components/dashboard/Widgets";
import { Reveal } from "@/components/common/Motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ADMIN_STATS, REVENUE_TREND, PLAN_DISTRIBUTION, ADMIN_CUSTOMERS, ADMIN_ORDERS,
} from "@/data/dashboard";
import { ZAR } from "@/lib/utils";
import { FAQS, TESTIMONIALS } from "@/data/content";
import { PLANS } from "@/data/plans";
import { toast } from "sonner";

const COLORS = ["#C89D2A", "#111111", "#B8B8B8", "#E4CE8F", "#8A6D1E"];

export function AdminHome() {
  return (
    <>
      <DashHeader title="Analytics & Executive Dashboard" subtitle="Real-time business KPI metrics and growth performance." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ADMIN_STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6" data-testid={`admin-stat-${i}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">{s.label}</p>
              <p className="mt-2 font-serif text-3xl font-light text-cream">{s.value}</p>
              <p className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${s.up ? "text-green-500" : "text-red-500"}`}>
                {s.up ? <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} /> : <TrendingDown className="h-3.5 w-3.5" strokeWidth={2} />}{s.delta}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Panel title="Revenue trend (ZAR)">
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
          <Panel title="Subscription Distribution">
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
                <div key={p.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-[#9A9A9A]">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                    {p.name}
                  </span>
                  <span className="font-medium text-cream">{p.value}%</span>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </>
  );
}

export function AdminCustomers() {
  const [search, setSearch] = useState("");

  const customers = ADMIN_CUSTOMERS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <DashHeader title="Customer Registrations & Accounts" subtitle="Manage registered customers and subscription plans." />
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter customers by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-xl border border-line bg-surface px-4 py-2.5 text-xs text-cream outline-none focus:border-gold"
        />
      </div>

      <Reveal>
        <Panel>
          <Table data-testid="admin-customers-table">
            <TableHeader>
              <TableRow className="border-line hover:bg-transparent">
                <TableHead>Customer Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Active Plan</TableHead>
                <TableHead>Lifetime Spend</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.email} className="border-line">
                  <TableCell className="font-medium text-cream">{c.name}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{c.email}</TableCell>
                  <TableCell className="text-gold font-medium">{c.plan}</TableCell>
                  <TableCell className="font-medium text-cream">{ZAR(c.spend)}</TableCell>
                  <TableCell className="text-right">
                    <button
                      onClick={() => toast.success(`Updated plan for ${c.name}`)}
                      className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold hover:bg-gold hover:text-white transition-all"
                    >
                      Manage Plan
                    </button>
                  </TableCell>
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
  const [orders, setOrders] = useState(ADMIN_ORDERS);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    toast.success(`Order ${id} status updated to ${newStatus}`);
  };

  return (
    <>
      <DashHeader title="Live Laundry Processing Pipeline" subtitle="Monitor and update laundry job stages in real time." />
      <Reveal>
        <Panel>
          <Table data-testid="admin-orders-table">
            <TableHeader>
              <TableRow className="border-line hover:bg-transparent">
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Status Stage</TableHead>
                <TableHead className="text-right">Update Stage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((o) => (
                <TableRow key={o.id} className="border-line">
                  <TableCell className="font-medium text-cream">{o.id}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.customer}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.service}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.kg}kg</TableCell>
                  <TableCell><StatusPill status={o.status} /></TableCell>
                  <TableCell className="text-right space-x-1">
                    <button
                      onClick={() => updateStatus(o.id, "Washing")}
                      className="rounded bg-cloud px-2 py-1 text-[10px] text-cream hover:bg-gold hover:text-white"
                    >
                      Washing
                    </button>
                    <button
                      onClick={() => updateStatus(o.id, "Ironing")}
                      className="rounded bg-cloud px-2 py-1 text-[10px] text-cream hover:bg-gold hover:text-white"
                    >
                      Ironing
                    </button>
                    <button
                      onClick={() => updateStatus(o.id, "Ready for Collection")}
                      className="rounded bg-cloud px-2 py-1 text-[10px] text-cream hover:bg-gold hover:text-white"
                    >
                      Ready
                    </button>
                    <button
                      onClick={() => updateStatus(o.id, "Delivered")}
                      className="rounded bg-gold/20 px-2 py-1 text-[10px] text-gold font-bold hover:bg-gold hover:text-white"
                    >
                      Done
                    </button>
                  </TableCell>
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
  const [faqs, setFaqs] = useState(FAQS.slice(0, 5));
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const addFaq = (e) => {
    e.preventDefault();
    if (!newQuestion || !newAnswer) return;
    setFaqs([...faqs, { category: "General", q: newQuestion, a: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
    toast.success("New FAQ added to website CMS!");
  };

  return (
    <>
      <DashHeader title="CMS Content & Announcements Manager" subtitle="Edit website content, homepage banners, FAQs, and packages." />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* FAQs CMS */}
        <Reveal>
          <Panel title="Website FAQs CMS">
            <form onSubmit={addFaq} className="mb-4 space-y-2 rounded-xl border border-line bg-cloud/40 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gold">Add New FAQ Item</p>
              <input
                type="text"
                placeholder="Question title..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-xs text-cream outline-none focus:border-gold"
              />
              <textarea
                placeholder="Answer text..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-xs text-cream outline-none focus:border-gold resize-none"
              />
              <button type="submit" className="rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-white hover:bg-surface hover:text-cream">
                Publish to Website
              </button>
            </form>

            <div className="space-y-2 max-h-72 overflow-y-auto">
              {faqs.map((f, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                  <span className="text-xs text-cream font-medium line-clamp-1">{f.q}</span>
                  <button onClick={() => toast.info("Editing FAQ...")} className="text-xs text-gold flex items-center gap-1">
                    <Edit2 className="h-3 w-3" /> Edit
                  </button>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>

        {/* Subscription Packages CMS */}
        <Reveal delay={0.1}>
          <Panel title="Subscription Packages CMS">
            <div className="space-y-3">
              {PLANS.map((p) => (
                <div key={p.id} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold text-cream">{p.name} — <span className="text-gold">{ZAR(p.price)}/mo</span></p>
                    <p className="text-[11px] text-[#9A9A9A]">{p.kg}kg allowance · {p.washes} washes</p>
                  </div>
                  <button onClick={() => toast.success(`Pricing updated for ${p.name}`)} className="text-xs text-gold flex items-center gap-1">
                    <Edit2 className="h-3 w-3" /> Edit Price
                  </button>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>

      {/* Customer Enquiries Inbox */}
      <div className="mt-6">
        <Reveal>
          <Panel title="Customer Online Enquiries Inbox">
            <div className="space-y-3">
              {[
                { name: "Client Enquiry A", email: "client_a@gmail.com", date: "Today 10:15", subject: "Commercial Laundry Quote for Restaurant" },
                { name: "Client Enquiry B", email: "client_b@airbnb.co.za", date: "Yesterday 16:40", subject: "Linen Changeover Schedule Query" },
              ].map((enq, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-line bg-surface p-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-cream flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-gold" /> {enq.name} ({enq.email})
                    </p>
                    <p className="text-xs text-[#9A9A9A]">{enq.subject}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#666]">{enq.date}</span>
                    <button onClick={() => toast.success(`Replied to ${enq.name}`)} className="rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-[11px] text-gold font-medium">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </>
  );
}
