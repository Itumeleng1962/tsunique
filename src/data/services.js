import {
  Shirt, Wind, Waves, Layers, PanelTop, Building2, Factory,
  GraduationCap, Zap, Sparkles, Truck, Bath, Sparkle
} from "lucide-react";

// Complete service catalogue matching TS Laundry PRD Specification (ZAR)
export const SERVICES = [
  {
    slug: "wash-and-fold",
    icon: Shirt,
    title: "Wash & Fold",
    tagline: "Everyday freshness, perfectly folded",
    from: 21,
    unit: "per kg",
    turnaround: "24-48 Hours",
    image:
      "https://images.unsplash.com/photo-1684248655527-46bee8e79029?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Our signature wash & fold service. We sort by fabric type and color, wash with hypoallergenic eco-detergents, tumble dry, and neatly fold your garments ready for the cupboard.",
    benefits: [
      "Colour-safe premium detergents",
      "Sorted by fabric & temperature",
      "Neatly folded, ready to shelve",
      "24 to 48-hour standard turnaround",
    ],
  },
  {
    slug: "wash-and-iron",
    icon: Sparkles,
    title: "Wash & Iron",
    tagline: "The complete crease-free treatment",
    from: 25,
    unit: "per kg",
    turnaround: "24-48 Hours",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "The full laundry experience — sorted, deep washed, tumble-dried, expertly steam pressed, and crisp-folded or hung on eco-hangers.",
    benefits: [
      "Professional steam pressing",
      "Wrinkle-free boardroom finish",
      "Garment-safe hangers provided",
      "Priority fabric care",
    ],
  },

  {
    slug: "ironing-services",
    icon: PanelTop,
    title: "Ironing Services",
    tagline: "Crisp, board-room ready pressing",
    from: 10.5,
    unit: "per kg",
    turnaround: "24 Hours",
    image:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Already clean but need a sharp finish? Our pressing specialists deliver a flawless, crease-free result on shirts, trousers, skirts, and dresses.",
    benefits: ["Precision steam pressing", "Delicate-fabric expertise", "Hung & protected", "Same-day option available"],
  },
  {
    slug: "bedding-linen-cleaning",
    icon: Bath,
    title: "Bedding & Linen Cleaning",
    tagline: "Hotel-fresh sheets & pillowcases",
    from: 30,
    unit: "per kg",
    turnaround: "48 Hours",
    image:
      "https://images.unsplash.com/photo-1760722974657-f64bce2f9cc5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "High-temperature sanitization wash for bed sheets, pillowcases, mattress protectors, and towels. Leaves linens crisp, fragrant, and bacteria-free.",
    benefits: ["Thermal sanitization wash", "Crisp hotel finish", "Stain removal treatment", "Allergen-free rinse"],
  },
  {
    slug: "blankets-and-duvets",
    icon: Layers,
    title: "Blankets & Duvets",
    tagline: "Deep-clean comfort for bulky bedding",
    from: 60,
    unit: "per item",
    turnaround: "48 Hours",
    image:
      "https://images.unsplash.com/photo-1724847885015-be191f1a47ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Bulky blankets and down duvets need specialized care. We use commercial large-drum machines and gentle air-fluff drying to restore loft and hygiene.",
    benefits: ["Large-capacity drum wash", "Dust mite & allergen removal", "Air-fluffed volume restoration", "Fresh scent protection"],
  },
  {
    slug: "curtains",
    icon: Wind,
    title: "Curtains",
    tagline: "Refresh your living spaces effortlessly",
    from: 35,
    unit: "per meter",
    turnaround: "72 Hours",
    image:
      "https://images.unsplash.com/photo-1724847885015-be191f1a47ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Curtains trap dust, smoke, and odors. Our gentle cleaning process removes deep grime without shrinkage, leaving curtains vibrant and steaming crisp.",
    benefits: ["Zero-shrinkage guarantee", "Dust & allergen extraction", "Steam press finish", "Optional take-down service"],
  },
  {
    slug: "school-uniforms",
    icon: GraduationCap,
    title: "School Uniforms",
    tagline: "Ready for Monday, every Monday",
    from: 45,
    unit: "per kg",
    turnaround: "24 Hours",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Heavy-duty stain treatment for grass, mud, and ink, combined with crisp pressing and name-tag tracking for blazers, shirts, skirts, and sports kits.",
    benefits: ["Grass & ink stain treatment", "Crisp blazer pressing", "Name-label audit", "Weekly family bundles"],
  },
  {
    slug: "corporate-laundry",
    icon: Building2,
    title: "Corporate Laundry",
    tagline: "Uniforms & office linen, always sharp",
    from: 40,
    unit: "per kg",
    turnaround: "48 Hours",
    image:
      "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Scheduled laundry collection and delivery for corporate uniforms, security gear, reception linen, and staff workwear with itemized monthly invoicing.",
    benefits: ["Scheduled collection routes", "Monthly tax invoicing", "Dedicated account manager", "Volume-based tiered discounts"],
  },
  {
    slug: "commercial-laundry",
    icon: Factory,
    title: "Commercial Laundry",
    tagline: "High-volume, hospitality-grade washing",
    from: 35,
    unit: "per kg",
    turnaround: "Custom SLA",
    image:
      "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Industrial laundry processing for restaurants, spas, boutique hotels, medical practices, and Airbnb hosts with strict hygiene compliance.",
    benefits: ["Industrial washing capacity", "Hospitality-grade sanitization", "Custom turnaround SLAs", "Dedicated delivery driver"],
  },
  {
    slug: "sameday-service",
    icon: Zap,
    title: "Same-Day Express Service",
    tagline: "Clean & back in your hands in hours",
    from: 30,
    unit: "per kg",
    turnaround: "6-12 Hours",
    image:
      "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "In a hurry? Drop off before 09:00 AM and collect or receive your fresh, dry, and pressed laundry by 17:00 PM the exact same day.",
    benefits: ["6-12 hour priority turnaround", "Express priority wash drum", "SMS notification when ready", "6 days a week service"],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
