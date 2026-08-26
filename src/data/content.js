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
    "Compensation policy up to 3x item charge for verified claims",
    "Hypoallergenic & Eco-Safe Detergents",
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
    a: "Unused weight does not roll over to the next cycle. Instead, we give you a one-week grace period to use your remaining allowance, after which your subscription for that cycle fades.",
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
    a: "We accept Debit cards, Credit cards (Visa, Mastercard), Instant EFT via PayFast/Yoco, and supported Mobile Payment apps. Recurring subscription payments are securely processed automatically every 5-week cycle.",
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
    a: "Standard Wash & Fold or Wash & Iron is processed within 24 to 48 hours. Bulky Bedding takes 48 hours, while Curtains take 72 hours. Same-Day Express Service is delivered in 6 to 12 hours if dropped off before 09:00 AM.",
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


  // Lost & Damaged Garments
  {
    category: "Lost & Damaged Garments",
    q: "What is your lost or damaged garment policy?",
    a: "All clothes are handled with utmost care. In the event of loss or damage, compensation is strictly limited to up to three times (3x) the laundry charge of that specific item. Claims must be submitted within 2 days with proof of receipt. TS Unique Laundry is not responsible for damage from manufacturer defects, weak/pre-existing damage, items left in pockets, or natural disasters/fire.",
  },
  {
    category: "Lost & Damaged Garments",
    q: "How do I claim for an item and what is the timeframe?",
    a: "Lost or damaged items must be claimed within 2 days of delivery. Proof of receipt is required. Additionally, by settling your invoice you legally acknowledge and agree that the quantity of laundry items listed on the invoice is correct.",
  },

  // Turnaround & Delivery
  {
    category: "Turnaround Times",
    q: "What are your collection and delivery hours?",
    a: "TS Unique Laundry delivers or collects laundry between 6:00 PM and 8:00 PM (18:00 – 20:00). You are also welcome to bring or collect your laundry in person at our store (85 Matlala St, Palime, Katlehong) from 7:00 AM till 7:00 PM. Note: An amount of R50 collection/delivery fee will be charged upon cancellation of services.",
  },

  // Refund Policy
  {
    category: "Refund Policy",
    q: "What is your refund and cancellation policy?",
    a: "Full payment of the invoice is required prior to the release of laundry. An amount of R50 collection/delivery fee is charged upon cancellation of services. Unclaimed items after 30 days will be considered abandoned and may be donated or disposed of.",
  },

  // Customer Responsibilities
  {
    category: "Customer Responsibilities",
    q: "What are my responsibilities before handing over laundry?",
    a: "Please check and empty all pockets before submitting laundry — TS Unique Laundry is not liable for lost or damaged items left inside. Delicate items, leather, suede, and specialty materials must be declared and are handled at customer's risk.",
  },
  {
    category: "Customer Responsibilities",
    q: "Do large or specialty items require extra time?",
    a: "Yes. Curtains, towels, white items, bags, blankets, and large items may require extended processing time. Stains will be treated to the best of our professional ability, but complete removal cannot be guaranteed.",
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
