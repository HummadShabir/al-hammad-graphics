// ============================================================
//  HAMMAD GRAPHICS — all website content lives in this file.
//  Edit text, links, images here; the whole site updates.
// ============================================================

export const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const site = {
  brand: "Hammad Graphics",
  name: "Hammad Shabir",
  role: "Graphic Designer",
  roles: [
    "Graphic Designer",
    "Logo & Brand Designer",
    "Print Media Expert",
    "Social Media Designer",
  ],
  tagline:
    "I turn ideas into bold visuals — logos, brands, social media creatives and print-ready designs that make businesses stand out.",
  phone: "03107286467",
  phoneIntl: "+92 310 7286467",
  whatsapp: "https://wa.me/923107286467",
  location: "Pakistan",
  heroImage: "1561070791-2526d30994b5",
  aboutImage: "1572044162444-ad60f128bdea",
};

export const socials = [
  {
    name: "LinkedIn",
    handle: "Hamtrix Creative",
    url: "https://www.linkedin.com/in/hamtrix-creative-08224b2b8",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    handle: "Hammad Shabir",
    url: "https://www.facebook.com/share/1cTmgrYENB/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    handle: "@hammadshabbir001",
    url: "https://www.instagram.com/hammadshabbir001",
    icon: "instagram",
  },
  {
    name: "TikTok",
    handle: "@hammad_malik200",
    url: "https://www.tiktok.com/@hammad_malik200",
    icon: "tiktok",
  },
];

export const stats = [
  { value: 4.5, suffix: "+", label: "Years of Experience", decimals: 1 },
  { value: 2, suffix: "", label: "Printing Houses Served", decimals: 0 },
  { value: 8, suffix: "+", label: "Design Services", decimals: 0 },
  { value: 6, suffix: "", label: "Pro Design Tools", decimals: 0 },
];

export const about = {
  title: "Designer by passion, printer-ready by profession",
  paragraphs: [
    "Assalam-o-Alaikum! I'm Hammad Shabir, the creative mind behind Hammad Graphics. For more than four years I have been designing in real printing-press environments, where every design has to look great on screen and come out perfect on paper, flex and vinyl.",
    "Working at Sheerazi Printers and SJ Printers taught me speed, accuracy and how real clients think. From a shop's first logo to a full panaflex banner, wedding cards, visiting cards and daily social media posts — I design with purpose, not just decoration.",
    "Today, through Hammad Graphics, I help businesses, shops, brands and creators build a strong visual identity that people remember.",
  ],
  highlights: [
    "Print-ready files (CMYK, bleed & cut marks)",
    "Fast turnaround & unlimited ideas",
    "Social media + print, all in one place",
    "Friendly communication in Urdu & English",
  ],
};

export const services = [
  {
    icon: "pen",
    title: "Logo Design",
    text: "Unique, memorable logos with multiple concepts, color variations and all source files.",
  },
  {
    icon: "brand",
    title: "Brand Identity",
    text: "Complete branding kits — colors, typography, stationery and brand guidelines.",
  },
  {
    icon: "social",
    title: "Social Media Posts",
    text: "Scroll-stopping posts, stories, ads and festive creatives for Facebook, Instagram & TikTok.",
  },
  {
    icon: "print",
    title: "Flex & Panaflex Banners",
    text: "Large-format shop boards, streamers, standees and banners designed for perfect printing.",
  },
  {
    icon: "card",
    title: "Visiting Cards & Stationery",
    text: "Business cards, letterheads, envelopes, bill books and receipts with a premium finish.",
  },
  {
    icon: "doc",
    title: "Flyers, Brochures & Posters",
    text: "Eye-catching marketing material for events, sales, restaurants, schools and more.",
  },
  {
    icon: "gift",
    title: "Wedding & Invitation Cards",
    text: "Elegant wedding cards, invitations and event designs — modern or traditional.",
  },
  {
    icon: "box",
    title: "Packaging & Labels",
    text: "Product labels, boxes, stickers and packaging that sell on the shelf.",
  },
  {
    icon: "play",
    title: "Thumbnails & Web Banners",
    text: "YouTube thumbnails, cover photos and digital banners that get more clicks.",
  },
  {
    icon: "photo",
    title: "Photo Editing & Retouching",
    text: "Background removal, manipulation, color correction and professional retouching.",
  },
];

export const categories = [
  "All",
  "Logo & Branding",
  "Social Media",
  "Print Design",
  "Posters & Flyers",
  "Packaging",
  "Digital & UI",
];

export const works = [
  { id: "1561070791-2526d30994b5", title: "Brand Color System", cat: "Logo & Branding", tall: true },
  { id: "1611532736597-de2d4265fba3", title: "Typography Logo Mark", cat: "Logo & Branding", tall: true },
  { id: "1523726491678-bf852e717f6a", title: "Logo Sketch to Vector", cat: "Logo & Branding" },
  { id: "1503387762-592deb58ef4e", title: "Brand Guideline Drafting", cat: "Logo & Branding" },
  { id: "1607083206869-4c7672e72a8a", title: "Big Sale Campaign Post", cat: "Social Media" },
  { id: "1586953208448-b95a79798f07", title: "Instagram Feed Design", cat: "Social Media" },
  { id: "1609921212029-bb5a28e60960", title: "Story & Reel Covers", cat: "Social Media" },
  { id: "1557672172-298e090bd0f1", title: "Abstract Ad Creative", cat: "Social Media", tall: true },
  { id: "1531403009284-440f080d1e12", title: "Print Proof Wall", cat: "Print Design" },
  { id: "1603484477859-abe6a73f9366", title: "Paper Texture Stationery", cat: "Print Design", tall: true },
  { id: "1513519245088-0e12902e5a38", title: "Framed Poster Series", cat: "Print Design" },
  { id: "1567095761054-7a02e69e5c43", title: "Dark Event Poster", cat: "Posters & Flyers", tall: true },
  { id: "1618005182384-a83a8bd57fbe", title: "Gradient Flyer Background", cat: "Posters & Flyers" },
  { id: "1626785774625-ddcddc3445e9", title: "Neon Promo Poster", cat: "Posters & Flyers" },
  { id: "1607082348824-0a96f2a4b9da", title: "Shopping Bag Packaging", cat: "Packaging" },
  { id: "1529336953128-a85760f58cb5", title: "Product Label Concept", cat: "Packaging" },
  { id: "1558655146-d09347e92766", title: "Web Banner Layouts", cat: "Digital & UI", tall: true },
  { id: "1600132806370-bf17e65e942f", title: "Wireframe Blueprint", cat: "Digital & UI" },
  { id: "1541462608143-67571c6738dd", title: "App Screen Mockups", cat: "Digital & UI" },
  { id: "1626785774573-4b799315345d", title: "Adobe Creative Workflow", cat: "Digital & UI" },
];

export const experience = [
  {
    company: "Hammad Graphics",
    role: "Founder & Freelance Graphic Designer",
    period: "Present",
    duration: "Own Business",
    points: [
      "Running my own design studio serving shops, brands and creators.",
      "Logo, branding, social media and print design under one roof.",
      "Direct client handling, from concept to final print-ready file.",
    ],
  },
  {
    company: "Sheerazi Printers",
    role: "Graphic Designer",
    period: "2.5 Years",
    duration: "Printing Press",
    points: [
      "Designed flex banners, panaflex boards, visiting cards and wedding cards daily.",
      "Prepared print-ready files with correct sizes, CMYK colors and bleeds.",
      "Worked directly with walk-in customers to finalize designs quickly.",
    ],
  },
  {
    company: "SJ Printers",
    role: "Graphic Designer",
    period: "2 Years",
    duration: "Printing Press",
    points: [
      "Created brochures, flyers, letterheads, bill books and stickers.",
      "Handled logo design and branding for local businesses.",
      "Built speed and accuracy in a high-volume production environment.",
    ],
  },
];

export const skills = [
  { name: "Adobe Photoshop", level: 95, short: "Ps" },
  { name: "Adobe Illustrator", level: 92, short: "Ai" },
  { name: "CorelDRAW", level: 94, short: "Cd" },
  { name: "Adobe InDesign", level: 80, short: "Id" },
  { name: "Canva", level: 90, short: "Cv" },
  { name: "Adobe Lightroom", level: 78, short: "Lr" },
];

export const softSkills = [
  "Creativity",
  "Typography",
  "Color Theory",
  "Layout & Composition",
  "Print Production",
  "Client Communication",
  "Time Management",
  "Attention to Detail",
];

export const process = [
  { step: "01", title: "Discuss", text: "We talk about your business, audience and what you need." },
  { step: "02", title: "Concept", text: "I research and sketch multiple creative directions." },
  { step: "03", title: "Design", text: "The chosen idea is crafted with care in professional tools." },
  { step: "04", title: "Revise", text: "Your feedback is applied until you are 100% happy." },
  { step: "05", title: "Deliver", text: "Final files for print & social — PNG, JPG, PDF, AI, CDR." },
];

export const whyMe = [
  { title: "Real Print Experience", text: "4.5+ years inside printing presses means your design prints exactly as it looks." },
  { title: "Fast Delivery", text: "Quick turnaround without compromising quality — urgent work welcome." },
  { title: "Affordable Packages", text: "Professional quality at prices that suit small businesses and startups." },
  { title: "All Source Files", text: "You own your design — editable source files included on request." },
];

export const marquee = [
  "Logo Design",
  "Branding",
  "Social Media Posts",
  "Flex Banners",
  "Visiting Cards",
  "Wedding Cards",
  "Brochures",
  "Packaging",
  "Thumbnails",
  "Photo Editing",
];
