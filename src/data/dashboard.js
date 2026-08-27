// Mock data powering the customer & admin dashboards
export const CURRENT_USER = {
  name: "Client 001",
  email: "client01@example.co.za",
  role: "customer",
  avatar:
    "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
  plan: "Family",
  planPrice: 850,
  kgIncluded: 53,
  kgUsed: 34,
  washesTotal: 8,
  washesUsed: 5,
  renews: "01 Jul 2026",
  referralCode: "NALEDI-GOLD",
  referralCredits: 240,
};

export const USAGE_TREND = [
  { month: "Jan", kg: 31 },
  { month: "Feb", kg: 28 },
  { month: "Mar", kg: 35 },
  { month: "Apr", kg: 33 },
  { month: "May", kg: 38 },
  { month: "Jun", kg: 27 },
];

export const SERVICE_SPLIT = [
  { name: "Wash & Fold", value: 52 },
  { name: "Iron & Press", value: 28 },
  { name: "Bedding", value: 14 },
  { name: "Express", value: 6 },
];

export const LAUNDRY_HISTORY = [
  { id: "TSU-1042", date: "18 Jun 2026", service: "Wash, Dry, Iron & Fold", kg: 6.2, status: "Delivered" },
  { id: "TSU-1038", date: "11 Jun 2026", service: "Wash & Fold", kg: 5.4, status: "Delivered" },
  { id: "TSU-1031", date: "04 Jun 2026", service: "Express Laundry", kg: 3.1, status: "Delivered" },
  { id: "TSU-1024", date: "28 May 2026", service: "Duvets", kg: 4.0, status: "Delivered" },
  { id: "TSU-1019", date: "21 May 2026", service: "Wash & Fold", kg: 5.9, status: "Delivered" },
];

export const INVOICES = [
  { id: "INV-2026-006", date: "01 Jun 2026", amount: 850, status: "Paid" },
  { id: "INV-2026-005", date: "01 May 2026", amount: 850, status: "Paid" },
  { id: "INV-2026-004", date: "01 Apr 2026", amount: 850, status: "Paid" },
  { id: "INV-2026-003", date: "01 Mar 2026", amount: 650, status: "Paid" },
];

export const PAYMENTS = [
  { id: "PAY-9921", date: "01 Jun 2026", method: "Visa •••• 4291", amount: 850, status: "Success" },
  { id: "PAY-9834", date: "01 May 2026", method: "PayFast EFT", amount: 850, status: "Success" },
  { id: "PAY-9750", date: "01 Apr 2026", method: "Visa •••• 4291", amount: 850, status: "Success" },
];

export const NOTIFICATIONS = [
  { id: 1, title: "Order TSU-1042 delivered", time: "2 hours ago", type: "success", unread: true },
  { id: 2, title: "Your plan renews on 01 Jul", time: "1 day ago", type: "info", unread: true },
  { id: 3, title: "You earned R60 referral credit", time: "3 days ago", type: "reward", unread: false },
  { id: 4, title: "Driver assigned for pickup", time: "5 days ago", type: "info", unread: false },
];

// Admin
export const ADMIN_STATS = [
  { label: "Monthly revenue", value: "R 486,200", delta: "+12.4%", up: true },
  { label: "Active subscribers", value: "2,417", delta: "+8.1%", up: true },
  { label: "Orders this week", value: "1,092", delta: "+3.6%", up: true },
  { label: "Churn rate", value: "1.9%", delta: "-0.4%", up: true },
];

export const REVENUE_TREND = [
  { month: "Jan", revenue: 342000 },
  { month: "Feb", revenue: 361000 },
  { month: "Mar", revenue: 398000 },
  { month: "Apr", revenue: 421000 },
  { month: "May", revenue: 452000 },
  { month: "Jun", revenue: 486000 },
];

export const PLAN_DISTRIBUTION = [
  { name: "Basic", value: 640 },
  { name: "Standard", value: 720 },
  { name: "Family", value: 610 },
  { name: "Plus", value: 290 },
  { name: "Premium", value: 157 },
];

export const ADMIN_CUSTOMERS = [
  { name: "Client 001", email: "client01@example.co.za", plan: "Family", spend: 5694, status: "Active" },
  { name: "Client 002", email: "client02@superhost.co.za", plan: "Plus", spend: 8994, status: "Active" },
  { name: "Client 003", email: "client03@med.co.za", plan: "Standard", spend: 3594, status: "Active" },
  { name: "Client 004", email: "client04@bistro.co.za", plan: "Premium", spend: 14994, status: "Active" },
  { name: "Client 005", email: "client05@studio.co.za", plan: "Basic", spend: 1396, status: "Paused" },
];

export const ADMIN_ORDERS = [
  { id: "TSU-1042", customer: "Client 001", service: "Wash & Iron", kg: 6.2, status: "Delivered" },
  { id: "TSU-1041", customer: "Client 002", service: "Commercial", kg: 22.0, status: "Processing" },
  { id: "TSU-1040", customer: "Client 004", service: "Restaurant Linen", kg: 31.5, status: "Collected" },
  { id: "TSU-1039", customer: "Client 003", service: "Express", kg: 3.1, status: "Out for delivery" },
  { id: "TSU-1038", customer: "Client 005", service: "Wash & Fold", kg: 4.8, status: "Scheduled" },
];
