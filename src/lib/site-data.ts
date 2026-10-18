import { Boxes, Building2, Car, Home } from "lucide-react";

export const PHONE = "7000568402";
export const EMAIL = "shreenathpackermovers@gmail.com";
export const PHONE_LINK = `tel:+91${PHONE}`;
export const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Dewas+Naka+Indore";
export const WHATSAPP = (message: string) =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;

export const SERVICES = [
  {
    slug: "home-shifting",
    icon: Home,
    number: "01",
    category: "FOR THE HOME",
    title: "Home shifting",
    summary:
      "From a few treasured pieces to a whole household, plan a home move around what matters to you.",
    detail:
      "A home move has a lot of small details. Share your pickup, destination and the things you’re moving, and we can talk through a plan that fits your household.",
    includes: [
      "Local moves within Indore and domestic destinations",
      "Packing and handling options suited to your belongings",
      "Door-to-door support from pickup to delivery",
    ],
  },
  {
    slug: "office-relocation",
    icon: Building2,
    number: "02",
    category: "FOR THE WORKPLACE",
    title: "Office relocation",
    summary:
      "Move desks, equipment and everyday essentials with thoughtful packing and an organised handover.",
    detail:
      "Whether you’re moving a few work essentials or planning a larger office relocation, tell us what needs to move and where the new workspace is.",
    includes: [
      "A move plan discussed around your workspace and route",
      "Packing options for furniture, cartons and office essentials",
      "Loading, transport and unloading arrangements",
    ],
  },
  {
    slug: "vehicle-transport",
    icon: Car,
    number: "03",
    category: "FOR THE OPEN ROAD",
    title: "Vehicle transport",
    summary:
      "Ask about adding car or bike transportation to your move. Availability depends on your route.",
    detail:
      "Taking a car or bike along? Share the vehicle type and your route so our team can discuss whether transport can be arranged for your move.",
    includes: [
      "Car and bike transportation enquiries",
      "Route and schedule discussion before booking",
      "Clear confirmation of applicable options and terms",
    ],
  },
  {
    slug: "loading-unloading",
    icon: Boxes,
    number: "04",
    category: "FOR THE HEAVY LIFTING",
    title: "Loading & unloading",
    summary:
      "Bring in an extra pair of careful hands for furniture, cartons and the larger things in life.",
    detail:
      "If you need help with the heavy lifting, tell us what needs to be handled, where it is going and what kind of support you’re looking for.",
    includes: [
      "Help with furniture, cartons and larger belongings",
      "Support at pickup and/or destination, as discussed",
      "A plan based on the items and access at each location",
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
    category: "Planning your move",
    question: "Which areas do you serve?",
    answer:
      "Shree Nath Packers & Movers is based in Indore and arranges local moves in the city as well as domestic relocations across India. Share your pickup and destination with us to discuss your route.",
  },
  {
    category: "Planning your move",
    question: "How is the moving estimate worked out?",
    answer:
      "The estimate depends on details such as your route, the volume of belongings, packing requirements and the services you choose. Send us a few details for a free, no-obligation conversation.",
  },
  {
    category: "Planning your move",
    question: "What details should I share to get started?",
    answer:
      "Your pickup and destination, approximate home or office size, preferred moving date and any special items are a useful place to start. You can send these through the enquiry form or discuss them by phone.",
  },
  {
    category: "Packing & handling",
    question: "What packing materials are used?",
    answer:
      "Packing materials can include cartons, corrugated sheets, stretch film and bubble wrap. The right combination depends on the items being moved—ask our team about anything especially delicate.",
  },
  {
    category: "Packing & handling",
    question: "Can you move a car or a bike too?",
    answer:
      "Vehicle transportation can be discussed as part of your move. Availability depends on the destination and schedule, so please share your route when you enquire.",
  },
  {
    category: "Packing & handling",
    question: "Is transit insurance available?",
    answer:
      "Please ask our team about the transit protection options available for your route, including coverage and terms, before confirming a booking.",
  },
  {
    category: "Booking & communication",
    question: "How do I request a quote?",
    answer:
      "Use the enquiry form to share your route and move details. It opens a pre-filled message in WhatsApp so you can review it and send it to our team. You can also call us directly.",
  },
  {
    category: "Booking & communication",
    question: "Do I have to book after getting an estimate?",
    answer:
      "No. The estimate request is a conversation, not a booking. Ask questions, review the details and decide whether you’d like to proceed.",
  },
];
