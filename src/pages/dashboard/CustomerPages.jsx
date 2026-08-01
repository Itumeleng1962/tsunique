import { DashHeader, Panel, StatusPill } from "@/components/dashboard/Widgets";
import { Reveal } from "@/components/common/Motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LAUNDRY_HISTORY, INVOICES, PAYMENTS, NOTIFICATIONS, CURRENT_USER } from "@/data/dashboard";
import { ZAR } from "@/lib/utils";
import { Download, Copy, Gift, Bell, CheckCircle2, Info } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

export function History() {
  return (
    <>
      <DashHeader title="Laundry History" subtitle="Every order, tracked and archived." />
      <Reveal>
        <Panel>
          <Table data-testid="history-table">
            <TableHeader><TableRow className="border-line hover:bg-transparent"><TableHead>Order</TableHead><TableHead>Date</TableHead><TableHead>Service</TableHead><TableHead>Weight</TableHead><TableHead className="text-right">Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {LAUNDRY_HISTORY.map((o) => (
                <TableRow key={o.id} className="border-line">
                  <TableCell className="font-medium text-cream">{o.id}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{o.date}</TableCell>
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

export function Invoices() {
  return (
    <>
      <DashHeader title="Invoices" subtitle="Download and review your monthly invoices." />
      <Reveal>
        <Panel>
          <Table data-testid="invoices-table">
            <TableHeader><TableRow className="border-line hover:bg-transparent"><TableHead>Invoice</TableHead><TableHead>Date</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Download</TableHead></TableRow></TableHeader>
            <TableBody>
              {INVOICES.map((i) => (
                <TableRow key={i.id} className="border-line">
                  <TableCell className="font-medium text-cream">{i.id}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{i.date}</TableCell>
                  <TableCell className="font-medium text-cream">{ZAR(i.amount)}</TableCell>
                  <TableCell><StatusPill status={i.status} /></TableCell>
                  <TableCell className="text-right"><button onClick={() => toast.success("Invoice downloaded (demo)")} className="inline-flex items-center gap-1 text-sm font-medium text-gold"><Download className="h-4 w-4" strokeWidth={1.75} /> PDF</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </Reveal>
    </>
  );
}

export function Payments() {
  return (
    <>
      <DashHeader title="Payment History" subtitle="A record of all your transactions." />
      <Reveal>
        <Panel>
          <Table data-testid="payments-table">
            <TableHeader><TableRow className="border-line hover:bg-transparent"><TableHead>Reference</TableHead><TableHead>Date</TableHead><TableHead>Method</TableHead><TableHead>Amount</TableHead><TableHead className="text-right">Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {PAYMENTS.map((p) => (
                <TableRow key={p.id} className="border-line">
                  <TableCell className="font-medium text-cream">{p.id}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{p.date}</TableCell>
                  <TableCell className="text-[#9A9A9A]">{p.method}</TableCell>
                  <TableCell className="font-medium text-cream">{ZAR(p.amount)}</TableCell>
                  <TableCell className="text-right"><StatusPill status={p.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </Reveal>
    </>
  );
}

export function Notifications() {
  const icon = { success: CheckCircle2, info: Info, reward: Gift };
  return (
    <>
      <DashHeader title="Notifications" subtitle="Stay updated on your orders and account." />
      <Reveal>
        <Panel>
          <div className="space-y-2" data-testid="notifications-list">
            {NOTIFICATIONS.map((n) => {
              const Icon = icon[n.type] || Bell;
              return (
                <div key={n.id} className={`flex items-center gap-4 rounded-xl border px-4 py-4 ${n.unread ? "border-gold/40 bg-gold/5" : "border-line"}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10"><Icon className="h-5 w-5 text-gold" strokeWidth={1.5} /></span>
                  <div className="flex-1"><p className="text-sm font-medium text-cream">{n.title}</p><p className="text-xs text-[#9A9A9A]">{n.time}</p></div>
                  {n.unread && <span className="h-2 w-2 rounded-full bg-gold" />}
                </div>
              );
            })}
          </div>
        </Panel>
      </Reveal>
    </>
  );
}

export function Referrals() {
  const u = CURRENT_USER;
  const copy = () => { navigator.clipboard?.writeText(u.referralCode); toast.success("Referral code copied!"); };
  return (
    <>
      <DashHeader title="Referral Rewards" subtitle="Earn credit for every friend you bring on board." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-2xl bg-ink p-8 text-white">
            <Gift className="relative z-10 h-8 w-8 text-gold" strokeWidth={1.25} />
            <p className="relative z-10 mt-4 font-serif text-3xl font-light">Give R60, get R60</p>
            <p className="relative z-10 mt-2 text-sm text-white/60">Your friend gets R60 off their first month, and you earn R60 credit when they subscribe.</p>
            <div className="relative z-10 mt-6 flex items-center gap-3 rounded-xl border border-white/15 bg-surface/5 p-4">
              <code className="flex-1 font-mono text-lg tracking-wider text-gold" data-testid="referral-code">{u.referralCode}</code>
              <button onClick={copy} data-testid="referral-copy" className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-medium text-white"><Copy className="h-3.5 w-3.5" strokeWidth={1.75} /> Copy</button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Panel title="Your rewards">
            <div className="space-y-4">
              <div className="flex items-end justify-between border-b border-line pb-4"><span className="text-sm text-[#9A9A9A]">Available credit</span><span className="font-serif text-4xl font-light text-gold">{ZAR(u.referralCredits)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#9A9A9A]">Friends referred</span><span className="font-medium text-cream">4</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#9A9A9A]">Pending invites</span><span className="font-medium text-cream">2</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#9A9A9A]">Lifetime earned</span><span className="font-medium text-cream">{ZAR(480)}</span></div>
            </div>
          </Panel>
        </Reveal>
      </div>
    </>
  );
}

export function Profile() {
  const u = CURRENT_USER;
  const { register, handleSubmit } = useForm({ defaultValues: { name: u.name, email: u.email, phone: "+27 61 234 5678", address: "42 Linden Avenue, Sandton" } });
  const cls = "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-gold";
  return (
    <>
      <DashHeader title="Profile" subtitle="Manage your personal details and preferences." />
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <Panel>
            <div className="flex flex-col items-center text-center">
              <img src={u.avatar} alt={u.name} className="h-24 w-24 rounded-full object-cover" />
              <p className="mt-4 font-serif text-2xl text-cream">{u.name}</p>
              <p className="text-sm text-[#9A9A9A]">{u.email}</p>
              <span className="mt-3 rounded-full bg-gold/10 px-4 py-1 text-xs font-medium text-gold">{u.plan} Member</span>
            </div>
          </Panel>
        </Reveal>
        <Reveal delay={0.1}>
          <Panel title="Account details">
            <form onSubmit={handleSubmit(() => toast.success("Profile updated (demo)"))} className="space-y-4" data-testid="profile-form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">Name</label><input {...register("name")} className={cls} /></div>
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">Email</label><input {...register("email")} className={cls} /></div>
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">Phone</label><input {...register("phone")} className={cls} /></div>
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">Address</label><input {...register("address")} className={cls} /></div>
              </div>
              <button type="submit" data-testid="profile-save" className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gold">Save changes</button>
            </form>
          </Panel>
        </Reveal>
      </div>
    </>
  );
}
