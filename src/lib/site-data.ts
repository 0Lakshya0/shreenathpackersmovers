import { Boxes, Building2, Car, Globe, Home, MapPin, Package, Warehouse } from "lucide-react";

export const PHONE = "7000568402";
export const EMAIL = "shreenathpackermovers@gmail.com";
export const PHONE_LINK = `tel:+91${PHONE}`;
export const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Dewas+Naka+Indore";
export const WHATSAPP = (message: string) =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;

export const SERVICES = [
  {
    slug: "household-shifting",
    icon: Home,
    number: "01",
    category: "HOME MOVES",
    title: "Household Shifting",
    summary: "Complete home relocation with multi-layer safe packing.",
    detail:
      "A complete home relocation, planned around your route, belongings and preferred moving date, with multi-layer packing options for the things that matter most.",
    includes: [
      "Local moves within Indore and domestic destinations",
      "Multi-layer packing options selected for your belongings",
      "Pickup-to-delivery arrangements discussed in advance",
    ],
  },
  {
    slug: "office-corporate-relocation",
    icon: Building2,
    number: "02",
    category: "BUSINESS MOVES",
    title: "Office & Corporate Relocation",
    summary: "Zero-downtime shifting for IT equipment & office assets.",
    detail:
      "A considered relocation for workspaces, IT equipment and office assets. We discuss access, inventory and timing so your team can plan around the move.",
    includes: [
      "Move planning shaped around your workspace and route",
      "Packing options for equipment, furniture and office essentials",
      "Timing and handover coordinated with your team",
    ],
  },
  {
    slug: "vehicle-transportation",
    icon: Car,
    number: "03",
    category: "VEHICLE MOVES",
    title: "Vehicle Transportation",
    summary: "Safe car & bike transport across India using closed carriers.",
    detail:
      "Taking a car or bike along? Share your vehicle type and route so our team can confirm carrier options, availability and the terms for your move.",
    includes: [
      "Car and bike transportation enquiries",
      "Closed-carrier options discussed for eligible routes",
      "Route, schedule and service terms confirmed before booking",
    ],
  },
  {
    slug: "local-shifting-indore",
    icon: MapPin,
    number: "04",
    category: "INDORE · LOCAL",
    title: "Local Shifting within Indore",
    summary: "Fast, budget-friendly same-day moves in Indore.",
    detail:
      "Moving across Indore? Tell us your pickup, destination and what needs to move. We’ll discuss a practical local plan and check date availability.",
    includes: [
      "Moves within Indore and nearby areas",
      "Same-day availability checked when requested",
      "Packing, loading and delivery options to discuss",
    ],
  },
  {
    slug: "domestic-shifting",
    icon: Globe,
    number: "05",
    category: "ACROSS INDIA",
    title: "Domestic Shifting",
    summary: "Inter-city relocation spanning all over India.",
    detail:
      "Plan an inter-city move from Indore to your next address. Route coverage, transit arrangements and timing are confirmed with you before booking.",
    includes: [
      "Inter-city relocation enquiries across India",
      "Route and schedule planning around your move",
      "Clear confirmation of applicable services and terms",
    ],
  },
  {
    slug: "warehousing-storage",
    icon: Warehouse,
    number: "06",
    category: "STORAGE",
    title: "Warehousing & Storage",
    summary: "Secure, CCTV-monitored short/long term storage solutions in Indore.",
    detail:
      "Need a little more time between addresses? Ask us about short- or long-term storage options in Indore, including facility access, availability and terms.",
    includes: [
      "Short- and long-term storage enquiries",
      "CCTV-monitored facility options to discuss",
      "Space, access and storage terms confirmed in advance",
    ],
  },
  {
    slug: "premium-packing-material",
    icon: Package,
    number: "07",
    category: "PACKING",
    title: "Premium Packing Material",
    summary: "Heavy-duty bubble wrap, corrugated sheets, & boxes.",
    detail:
      "Packing materials are selected around the item and the journey. Ask about heavy-duty bubble wrap, corrugated sheets, stretch film and sturdy cartons.",
    includes: [
      "Heavy-duty bubble wrap and corrugated sheets",
      "Cartons and boxes in suitable sizes",
      "Material combinations discussed for delicate items",
    ],
  },
  {
    slug: "loading-unloading",
    icon: Boxes,
    number: "08",
    category: "MOVING SUPPORT",
    title: "Professional Loading & Unloading",
    summary: "Expert labor crew for dismantling, lifting, and re-assembling.",
    detail:
      "Discuss the items, access and support you need. Loading and unloading help can include dismantling, lifting and re-assembling as agreed for your move.",
    includes: [
      "Help with furniture, cartons and larger belongings",
      "Dismantling and re-assembly discussed in advance",
      "Crew and timing planned around your requirements",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Tell us your plan",
    description: "Share your pickup city, destination, preferred date and what needs to travel.",
  },
  {
    number: "02",
    title: "Shape your estimate",
    description: "We’ll discuss the route, volume of belongings and services that suit your move.",
  },
  {
    number: "03",
    title: "Get ready to go",
    description: "Once the details are agreed, your move is prepared for packing and transport.",
  },
  {
    number: "04",
    title: "Arrive at your new door",
    description:
      "Your belongings are delivered to the agreed destination, ready for the next chapter.",
  },
];

export const FAQ_ITEMS = [
  {
    category: "Transit protection",
    question: "What does transit insurance cover?",
    answer:
      "Transit cover depends on the policy, declared value, route, exclusions and written terms. Ask our team for the applicable coverage details before confirming a booking; cover should never be assumed without that confirmation.",
  },
  {
    category: "Packing standards",
    question: "Which packing materials are used for a move?",
    answer:
      "Depending on the item and route, packing may use heavy-duty bubble wrap, corrugated sheets, stretch film and sturdy cartons. We’ll discuss the appropriate combination for your belongings before the move.",
  },
  {
    category: "Domestic network",
    question: "Where do you provide domestic shifting?",
    answer:
      "Shree Nath Packers & Movers is based at Dewas Naka in Indore and arranges local moves as well as inter-city relocation enquiries across India. Route availability, timing and services are confirmed before booking.",
  },
  {
    category: "Shipment updates",
    question: "How can I track my shipment?",
    answer:
      "The tracking panel on this website is a clearly labelled sample, not live consignment data. For an actual move update, contact our team by phone or WhatsApp with the booking details you were given.",
  },
];
