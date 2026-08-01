import {
  Shirt, Wind, Waves, Layers, PanelTop, Building2, Factory,
  GraduationCap, Zap, Sparkles, Truck, Bath,
} from "lucide-react";

// Complete service catalogue with realistic South African pricing (ZAR)
export const SERVICES = [
  {
    slug: "wash-and-fold",
    icon: Shirt,
    title: "Wash & Fold",
    tagline: "Everyday freshness, perfectly folded",
    from: 21,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1684248655527-46bee8e79029?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Our signature service. We sort, wash, dry and neatly fold your everyday laundry using premium eco-detergents and fabric care that keeps colours vibrant and fabrics soft.",
    benefits: [
      "Colour-safe premium detergents",
      "Sorted by fabric & temperature",
      "Neatly folded, ready to shelve",
      "48-hour standard turnaround",
    ],
  },
  {
    slug: "wash-dry-iron-fold",
    icon: Sparkles,
    title: "Wash, Dry, Iron & Fold",
    tagline: "The complete crease-free treatment",
    from: 25,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "The full experience — washed, tumble-dried, expertly pressed and folded. Ideal for professionals who want wardrobe-ready garments without lifting a finger.",
    benefits: [
      "Professional steam pressing",
      "Wrinkle-free finish",
      "Garment-safe hangers available",
      "Priority handling",
    ],
  },
  {
    slug: "iron-only",
    icon: PanelTop,
    title: "Iron Only",
    tagline: "Crisp, boardroom-ready pressing",
    from: 10.5,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Already clean but need a sharp finish? Our pressing specialists deliver a flawless, crease-free result on shirts, trousers, dresses and delicate fabrics.",
    benefits: ["Precision steam pressing", "Delicate-fabric expertise", "Hung & protected", "Same-day option"],
  },
  {
    slug: "blankets",
    icon: Layers,
    title: "Blankets",
    tagline: "Deep-clean comfort for the cold nights",
    from: 60,
    unit: "per item",
    image:
      "https://images.unsplash.com/photo-1724847885015-be191f1a47ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Bulky blankets need special care. We use large-capacity machines and gentle cycles to remove dust, allergens and odours while protecting the weave.",
    benefits: ["Large-capacity deep clean", "Allergen & dust removal", "Fabric-softener finish", "Fully dried & fluffed"],
  },
  {
    slug: "duvets",
    icon: Bath,
    title: "Duvets",
    tagline: "Hotel-fresh bedding, restored",
    from: 60,
    unit: "per item",
    image:
      "https://images.unsplash.com/photo-1760722974657-f64bce2f9cc5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "From feather to synthetic, we clean and revive duvets of every size, restoring loft and freshness so you sleep like you're in a five-star suite.",
    benefits: ["Feather & synthetic safe", "Restored loft & volume", "Deodorised & sanitised", "All sizes catered for"],
  },
  {
    slug: "curtains",
    icon: Wind,
    title: "Curtains",
    tagline: "Refresh your rooms, effortlessly",
    from: 35,
    unit: "per meter",
    image:
      "https://images.unsplash.com/photo-1724847885015-be191f1a47ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Curtains gather dust and dull a room. Our gentle process brings back the colour and drape without shrinkage — take-down and re-hang available.",
    benefits: ["Shrink-safe process", "Colour restoration", "Optional take-down & re-hang", "Steam finished"],
  },
  {
    slug: "corporate-laundry",
    icon: Building2,
    title: "Corporate Laundry",
    tagline: "Uniforms & office linen, always sharp",
    from: 40,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Scheduled collection and delivery for uniforms, aprons and office linen. Keep your team looking professional with a reliable, invoiced service.",
    benefits: ["Scheduled routes", "Monthly invoicing", "Dedicated account manager", "Volume discounts"],
  },
  {
    slug: "commercial-laundry",
    icon: Factory,
    title: "Commercial Laundry",
    tagline: "High-volume, hospitality-grade",
    from: 35,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "For restaurants, spas, guesthouses and Airbnb hosts — industrial capacity with hospitality standards, turned around fast and delivered on time, every time.",
    benefits: ["Industrial capacity", "Hospitality standards", "Rapid turnaround", "Flexible contracts"],
  },
  {
    slug: "school-uniforms",
    icon: GraduationCap,
    title: "School Uniforms",
    tagline: "Ready for Monday, every Monday",
    from: 45,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Stain treatment, wash, press and label-check for school uniforms. A weekly subscription keeps the whole family's uniforms crisp and stress-free.",
    benefits: ["Stain treatment included", "Name-label checks", "Weekly plans", "Family bundles"],
  },
  {
    slug: "express-laundry",
    icon: Zap,
    title: "Express Laundry",
    tagline: "Clean & back in your hands today",
    from: 30,
    unit: "per kg",
    image:
      "https://images.unsplash.com/photo-1604335398980-ededcadcc37d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "Need it fast? Our express lane collects, cleans and returns your laundry the very same day — because life doesn't always wait.",
    benefits: ["Same-day turnaround", "Priority queue", "Real-time updates", "Available 6 days a week"],
  },
  {
    slug: "delivery",
    icon: Truck,
    title: "Free Delivery",
    tagline: "Doorstep collection & drop-off",
    from: 0,
    unit: "free on plans",
    image:
      "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    description:
      "We collect and deliver at a time that suits you. Free within 3 km on all orders and plans (just R15 beyond) — track your driver in real time.",
    benefits: ["Free within 3 km", "Live driver tracking", "Contactless option", "7-day scheduling"],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
