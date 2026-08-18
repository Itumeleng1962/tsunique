export const TESTIMONIALS = [
  {
    name: "Naledi Mokoena",
    role: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1562337404-3044c84ac061?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    quote:
      "I honestly forgot laundry was a chore. It vanishes on Tuesday and reappears folded like a boutique hotel. The Family plan pays for itself in time alone.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    role: "Airbnb Superhost",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    quote:
      "Managing five listings, turnaround is everything. TS Unique has never missed a collection. My linen looks five-star, guests notice, reviews prove it.",
    rating: 5,
  },
  {
    name: "Thandiwe Dlamini",
    role: "Medical Registrar",
    avatar:
      "https://images.unsplash.com/photo-1662850886700-4ec19bd30d11?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    quote:
      "Between night shifts I have zero time. The express lane got my scrubs back same-day, spotless. This service is quietly life-changing.",
    rating: 5,
  },
  {
    name: "Sipho Nkosi",
    role: "Restaurant Owner",
    avatar:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?crop=entropy&cs=srgb&fm=jpg&q=85&w=300",
    quote:
      "Consistent, invoiced, reliable. Our aprons and tablecloths are always crisp for service. A genuine partner, not just a supplier.",
    rating: 5,
  },
];

export const STATS = [
  { value: 18000, suffix: "+", label: "Loads delivered" },
  { value: 2400, suffix: "+", label: "Happy subscribers" },
  { value: 48, suffix: "h", label: "Avg. turnaround" },
  { value: 99, suffix: "%", label: "On-time rate" },
];

export const COMPANY_PROFILE = {
  name: "TS Unique Laundry Services",
  founded: "2021",
  tagline: "Redefining garment care through subscription convenience",
  vision: "To become the leading tech-enabled laundry subscription service across South Africa, delivering pristine garments with zero effort for every household and business.",
  mission: "To eliminate the friction of daily laundry by providing reliable, eco-friendly, and subscription-based laundry management that saves time, preserves fabric quality, and empowers busy lifestyle routines.",
  values: [
    { title: "Excellence & Precision", desc: "Every wash cycle is temperature-calibrated and garment-sorted for optimum longevity." },
    { title: "Customer Centricity", desc: "Self-service portals, transparent weight tracking, and responsive support put you in complete control." },
    { title: "Eco Responsibility", desc: "100% biodegradable detergents, microplastic filtering, and water-reclaiming machines." },
    { title: "Reliability & Speed", desc: "Strict SLA turnarounds from 24h standard to 6-hour express processing." },
  ],
  history: [
    { year: "2021", title: "Founded in Katlehong", desc: "Started as a single storefront providing quality wash & fold to local residents." },
    { year: "2022", title: "Launch of Subscriptions", desc: "Introduced monthly weight-based laundry subscription packages with doorstep collection." },
    { year: "2024", title: "Commercial & Corporate Unit", desc: "Expanded capacity to serve Airbnb hosts, corporate offices, restaurants, and schools." },
    { year: "2026", title: "Digital Customer Portal", desc: "Rolled out automated portal, dynamic pricing calculator, and real-time wash tracking system." },
  ],
  team: [
    { name: "Jane Doe", role: "Founder & Managing Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
    { name: "John Doe", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
    { name: "Alex Doe", role: "Logistics Coordinator", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
  ],
  commitments: [
    "Garment Protection Warranty up to R2,500 per order",
    "100% On-Time Turnaround Guarantee or your next wash is free",
    "Hypoallergenic & Eco-Safe Detergent Standard",
    "Dedicated Customer Support via Phone, Email & WhatsApp",
  ],
};

export const FAQ_CATEGORIES = [
  "All",
  "Subscription Rules",
  "Payment Methods",
  "Turnaround Times",
  "Accepted Items",
  "Lost & Damaged Garments",
  "Refund Policy",
  "Customer Responsibilities",
];

export const FAQS = [
  // Subscription Rules
  {
    category: "Subscription Rules",
    q: "How do monthly subscription plans work?",
    a: "Subscriptions run on a 5-week billing cycle and include 4 scheduled wash collections. Each plan comes with a total weight allowance (e.g. 53 kg for Family Plan) which you can split across your 4 drop-offs. Your wash meter in the Customer Portal tracks remaining weight in real time.",
  },
  {
    category: "Subscription Rules",
    q: "What happens if I don't use all my weight allowance in a cycle?",
    a: "Depending on your plan tier, unused weight rolls over to the next cycle (up to 15% on Family Plan and 25% on Executive Premium). Any excess weight beyond the plan limit is billed at a discounted per-kg add-on rate.",
  },
  {
    category: "Subscription Rules",
    q: "Can I pause, upgrade, or cancel my subscription?",
    a: "Yes! There are no lock-in contracts. You can upgrade, downgrade, pause for holidays, or cancel anytime directly inside your Customer Portal.",
  },

  // Payment Methods
  {
    category: "Payment Methods",
    q: "What payment methods are supported on the website?",
    a: "We accept Debit cards, Credit cards (Visa, Mastercard), Instant EFT via PayFast/Ozow, and supported Mobile Payment apps. Recurring subscription payments are securely processed automatically every 5-week cycle.",
  },
  {
    category: "Payment Methods",
    q: "Will I receive an automated payment receipt and invoice?",
    a: "Yes! Immediately after payment, an automated invoice and digital tax receipt are emailed to you and made available for instant download in your Customer Portal under the 'Invoices' tab.",
  },

  // Turnaround Times
  {
    category: "Turnaround Times",
    q: "What are your standard and express turnaround times?",
    a: "Standard Wash & Fold or Wash & Iron is processed within 24 to 48 hours. Dry Cleaning and Bulky Bedding take 48 hours, while Curtains take 72 hours. Same-Day Express Service is delivered in 6 to 12 hours if dropped off before 09:00 AM.",
  },
  {
    category: "Turnaround Times",
    q: "How will I know when my laundry is ready?",
    a: "You will receive an automated SMS and email notification when your laundry reaches the 'Ready for Collection / Dispatch' stage, complete with driver details if delivery is selected.",
  },

  // Accepted Items
  {
    category: "Accepted Items",
    q: "What garments and items do you accept?",
    a: "We clean everyday wardrobe items, suits, dresses, delicates, bedding, linen, blankets, duvets, curtains, school uniforms, aprons, and commercial towels. Items with hazardous chemicals, oil spills, or pet contamination must be declared prior to pickup.",
  },
  {
    category: "Accepted Items",
    q: "Do you clean dry-clean-only or delicate silk items?",
    a: "Yes. Our Dry Cleaning & Delicate Care department uses specialised low-temperature solvents specifically formulated for silk, cashmere, wool, and structured suits.",
  },

  // Lost & Damaged Garments
  {
    category: "Lost & Damaged Garments",
    q: "What is your lost or damaged garment policy?",
    a: "In the rare event of damage or loss during processing, TS Laundry provides a Garment Insurance Coverage of up to R2,500 per order. All items are tagged and photographed upon entry at our facility.",
  },
  {
    category: "Lost & Damaged Garments",
    q: "How do I lodge a claim for a missing or damaged item?",
    a: "Simply click 'Lodge Support Query' in your Customer Portal within 48 hours of delivery. Our support team will inspect intake footage and resolve claims within 2 business days.",
  },

  // Refund Policy
  {
    category: "Refund Policy",
    q: "What is your refund policy?",
    a: "If you are unsatisfied with the wash quality, we will re-wash your entire load free of charge. If you cancel a subscription within 7 days of sign-up without using any washes, a 100% full refund is issued immediately.",
  },

  // Customer Responsibilities
  {
    category: "Customer Responsibilities",
    q: "What are my responsibilities before handing over laundry?",
    a: "Please ensure all pockets are emptied (coins, keys, lip balm), delicate items are bagged separately, and any pre-existing stains or care instructions are flagged in your order notes.",
  },
  {
    category: "Customer Responsibilities",
    q: "Do I need to sort my laundry before collection?",
    a: "Not necessarily! Our facility team sorts by color and fabric type. However, separating dry-clean items from wash-and-fold items helps streamline quick intake.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Register & Pick a Plan",
    text: "Create your account online in 60 seconds and choose a subscription package or individual service.",
  },
  {
    n: "02",
    title: "Make Secure Payment",
    text: "Pay via Card, Instant EFT or Mobile Banking with instant digital invoice & email confirmation.",
  },
  {
    n: "03",
    title: "Drop Off or Pickup",
    text: "Drop off at our store or schedule doorstep collection with real-time driver tracking.",
  },
  {
    n: "04",
    title: "Eco-Friendly Washing",
    text: "We sort, wash with biodegradable detergents, press, and steam-fold with temperature precision.",
  },
  {
    n: "05",
    title: "Live Wash Status Tracking",
    text: "Monitor remaining washes and progress updates live inside your secure Customer Portal.",
  },
  {
    n: "06",
    title: "Collection or Delivery",
    text: "Receive your fresh, fragrant laundry back within SLA turnaround time (or same-day on express).",
  },
];
