// Shared content for the Tip Top Blinds site clone.

const ASSET = "https://vibe.filesafe.space/1795144699334834390/assets";

export const site = {
  name: "Tip Top Blinds",
  phone: "(03) 9544 4999",
  phoneHref: "tel:0395444999",
  email: "info@tiptopblinds.com.au",
  address: {
    line1: "46-50 Buckland Street",
    line2: "Clayton, VIC 3168",
  },
  social: {
    facebook: "https://www.facebook.com/tiptopblinds",
    instagram: "https://www.instagram.com/tiptopblinds",
    linkedin: "https://au.linkedin.com/company/tiptop-blinds",
  },
  callbackUrl: "https://go.tiptopblinds.co/request-a-call-back",
};

export const images = {
  logo: `${ASSET}/41749e90-b728-4ffc-8cfb-e5825446873b.png`,
  heroPoster: `${ASSET}/49dc57da-5562-4a28-909f-24601a8f764c.jpg`,
  heroMobile: `${ASSET}/4a8d579a-1cba-458b-b868-48283fcd27b5.webp`,
  indoor: `${ASSET}/89582d87-6c78-4e13-b9a1-913d9083528c.webp`,
  rollers: `${ASSET}/c6b32d94-838d-48a5-a01b-b8da1f956b01.webp`,
  outdoor: `${ASSET}/55911ba1-68a6-4484-b258-2832d1401e0b.webp`,
  curtains: `${ASSET}/4a8d579a-1cba-458b-b868-48283fcd27b5.webp`,
  awnings: `${ASSET}/49c10864-73e6-441f-bc0f-e56faa77cddb.webp`,
  shutters: `${ASSET}/0e89b3de-eb55-47ed-9fdc-82337dfef2bf.webp`,
  roof: `${ASSET}/260c0138-195b-4445-8812-aee4fc8090a6.webp`,
  motorisation: `${ASSET}/02c621e6-bada-43b5-ac75-2dc9ceaa923b.webp`,
  showroom: `${ASSET}/7253d6bb-d3e7-4c7d-b6ee-05b34c076868.webp`,
  blogBathroom: `${ASSET}/6020ea97-05a8-4c48-928d-bfe8074cde29.jpg`,
  blogSliding: `${ASSET}/1225d70a-2fc1-4f32-b050-05a4bc2a1747.jpg`,
  blogBedroom: `${ASSET}/6abe059c-da22-4f19-b515-e6e5964f649c.jpg`,
};

export type Collection = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
};

export const collections: Collection[] = [
  { slug: "indoor", title: "Indoor", subtitle: "Interior solutions", image: images.indoor },
  { slug: "roller-blinds", title: "Rollers", subtitle: "Sleek & versatile", image: images.rollers },
  { slug: "outdoor", title: "Outdoor", subtitle: "Weather protection", image: images.outdoor },
  {
    slug: "sheer-curtains",
    title: "Curtains",
    subtitle: "Timeless luxury",
    image: images.curtains,
  },
  { slug: "awnings", title: "Awnings", subtitle: "Alfresco living", image: images.awnings },
  { slug: "shutters", title: "Shutters", subtitle: "Enduring elegance", image: images.shutters },
  { slug: "roof-systems", title: "Roof Systems", subtitle: "Overhead shade", image: images.roof },
  {
    slug: "motorisation",
    title: "Motorisation",
    subtitle: "Smart control",
    image: images.motorisation,
  },
];

export const productNav = [
  {
    label: "Indoor",
    slug: "indoor",
    items: ["roller-blinds", "roman-blinds", "venetian-blinds", "vertical-blinds"],
  },
  {
    label: "Outdoor",
    slug: "awnings",
    items: ["folding-arm-awnings", "fixed-awnings", "zip-blinds"],
  },
  {
    label: "Curtains",
    slug: "sheer-curtains",
    items: ["sheer-curtains", "blockout-curtains", "pelmets"],
  },
];

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "ruler",
    title: "Free Measure & Quote",
    description:
      "Expert consultants visit your home to measure and advise on the perfect solution.",
  },
  {
    icon: "factory",
    title: "Factory Direct Prices",
    description:
      "We manufacture blinds, curtains and awnings in our Clayton factory — no middleman, just great value.",
  },
  {
    icon: "store",
    title: "Designer Showroom",
    description:
      "Visit our showroom to see our full range of curtains, blinds and awnings on display before you buy.",
  },
  {
    icon: "shield",
    title: "Quality Guaranteed",
    description: "Premium materials and craftsmanship backed by comprehensive warranties.",
  },
  {
    icon: "award",
    title: "70+ Years Experience",
    description: "Trusted by thousands of Australian homeowners for over seven decades.",
  },
];

export const stats = [
  { value: "70+", label: "Years Experience" },
  { value: "15,000+", label: "Happy Customers" },
  { value: "100%", label: "Custom Made" },
  { value: "5★", label: "Average Rating" },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Margaret and the team were great to deal with. Delivered on time for a fair price — thank you!",
    name: "Andrew Paterson",
    location: "Melbourne, VIC",
    project: "Window Coverings",
  },
  {
    quote:
      "From measure to install, the whole process was seamless. The shutters transformed our kitchen.",
    name: "Harry & Tash",
    location: "Melbourne, VIC",
    project: "Plantation Shutters",
  },
  {
    quote:
      "Beautifully made curtains and a team that genuinely cared about getting the detail right.",
    name: "Sophie L.",
    location: "Glen Iris, VIC",
    project: "Sheer & Blockout Curtains",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-window-furnishing-for-bathroom",
    title: "What's the Best Window Furnishing for a Bathroom?",
    category: "Buying Guides",
    date: "18 Nov 2026",
    readTime: "2 min",
    image: images.blogBathroom,
    excerpt:
      "Moisture, privacy and light — we break down the best window covering options for wet-area bathrooms.",
  },
  {
    slug: "best-blinds-curtains-for-sliding-doors",
    title: "Best Blinds or Curtains for Sliding Doors",
    category: "Buying Guides",
    date: "16 Nov 2026",
    readTime: "2 min",
    image: images.blogSliding,
    excerpt:
      "Sliding and stacker doors need the right treatment. Here's how to choose between panels and curtains.",
  },
  {
    slug: "best-window-covering-cold-bedroom",
    title: "What's the Best Window Covering for a Cold Bedroom?",
    category: "Buying Guides",
    date: "15 Nov 2026",
    readTime: "2 min",
    image: images.blogBedroom,
    excerpt:
      "Keep the warmth in and the cold out with the right layered window coverings for bedrooms.",
  },
];

export type Faq = { q: string; a: string };

export const customBlindsFaqs: Faq[] = [
  {
    q: "How much do custom blinds cost in Melbourne?",
    a: "Most Melbourne homes pay $150–$600 per window installed. Basic blockout roller blinds sit around $180–$280, sunscreen roller blinds $200–$350, custom roman blinds $400–$700, and motorised options add roughly $200–$350 per window. A typical 4-bedroom home with 15–20 windows comes in between $2,400 and $6,000 fully installed at factory-direct pricing.",
  },
  {
    q: "Are custom blinds worth it compared to Bunnings or IKEA?",
    a: "For most Melbourne homeowners, yes. Off-the-shelf blinds only come in standard sizes — they leave gaps, let in light, and rarely last more than 3–5 years. Custom blinds are made to the millimetre, last 10–20 years, and include professional installation. The price gap is usually recovered in lifespan alone.",
  },
  {
    q: "How long do custom blinds take to make and install?",
    a: "From the free in-home measure to install is typically 2–3 weeks. Because we manufacture in our Clayton factory rather than importing, we can turn around property-settlement rush jobs in 7–10 working days when needed.",
  },
  {
    q: "Are custom blinds expensive?",
    a: "They cost more than DIY options from Bunnings ($40–$150) but less than people assume — typically $150–$600 per window installed at factory-direct pricing. We provide a written quote at the free in-home measure so you see the number before committing.",
  },
  {
    q: "Do custom blinds include installation?",
    a: "Yes — all quotes include measure, manufacture, and professional installation by our own employed installers (not subcontractors). It's why our 5-year warranty covers both parts and workmanship.",
  },
  {
    q: "How do I get a quote for custom blinds in Melbourne?",
    a: "Three ways: book a free in-home measure and we come to you anywhere across Melbourne, visit our Clayton showroom 7 days a week, or submit your house plans and we'll prepare a quote without an appointment. All three are free and obligation-free.",
  },
];

export const comparisonTable = [
  {
    feature: "Fits your exact window",
    us: "Made to the millimetre",
    them: "Closest standard size only",
  },
  {
    feature: "Fabric & colour choice",
    us: "200+ fabrics, 80+ colours",
    them: "8–15 standard options",
  },
  { feature: "Lifespan", us: "10–20 years", them: "3–5 years typical" },
  { feature: "Installation", us: "Included — our team", them: "DIY (your time, your risk)" },
  { feature: "Warranty", us: "5 years parts & labour", them: "1 year, parts only" },
  { feature: "Cost per window", us: "$150–$600 installed", them: "$40–$150 (you install)" },
];

export const navLinks = [
  { label: "Gallery", to: "/gallery" },
  { label: "Projects", to: "/projects" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Showroom", to: "/showroom" },
];
