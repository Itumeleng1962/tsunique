import { Outlet, NavLink, useNavigate, Link } from "react-router-dom";
import {
  LayoutDashboard, Receipt, CreditCard, History, Bell, User,
  Gift, LogOut, Users, ShoppingBag, BarChart3, Settings,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { PageTransition } from "@/components/common/Motion";

const CUSTOMER_NAV = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/history", label: "Laundry History", icon: History },
  { to: "/dashboard/invoices", label: "Invoices", icon: Receipt },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/referrals", label: "Referral Rewards", icon: Gift },
  { to: "/dashboard/profile", label: "Profile", icon: User },
];

const ADMIN_NAV = [
  { to: "/admin", label: "Analytics", icon: BarChart3, end: true },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/content", label: "Content", icon: Settings },
];

export function DashboardLayout({ admin = false }) {
  const nav = admin ? ADMIN_NAV : CUSTOMER_NAV;
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-cloud lg:flex">
      {/* Sidebar */}
      <aside className="sticky top-0 z-30 hidden h-screen w-72 shrink-0 flex-col border-r border-line bg-surface lg:flex" data-testid="dashboard-sidebar">
        <div className="border-b border-line px-6 py-6 flex items-center justify-between">
          <Logo />
          <ThemeToggle />
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              data-testid={`side-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? "bg-ink text-white" : "text-[#9A9A9A] hover:bg-cloud hover:text-cream"
                }`
              }
            >
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-line p-4">
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-cloud px-3 py-3">
            <img src={user?.avatar} alt={user?.name} className="h-9 w-9 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-cream">{user?.name}</p>
              <p className="truncate text-xs text-[#9A9A9A] capitalize">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            data-testid="dashboard-logout-button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#9A9A9A] transition-colors hover:bg-cloud hover:text-cream"
          >
            <LogOut className="h-[18px] w-[18px]" strokeWidth={1.5} /> Sign out
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-surface px-4 py-3 lg:hidden">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={onLogout} className="rounded-full border border-line px-4 py-2 text-sm font-medium">
            Sign out
          </button>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        {/* Mobile nav scroller */}
        <div className="flex gap-2 overflow-x-auto border-b border-line bg-surface px-4 py-3 lg:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                  isActive ? "bg-ink text-white" : "bg-cloud text-[#9A9A9A]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <main className="p-6 lg:p-10">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
