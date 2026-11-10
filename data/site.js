// ============================================================
//  AL-HAMMAD GRAPHICS — all website content lives in this file.
//  Edit text, links, images here; the whole site updates.
// ============================================================

export const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const work = (file, thumb = false) => `${base}/works/${thumb ? "thumbs/" : ""}${file}`;

export const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const site = {
  brand: "Al-Hammad Graphics",
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
  { value: 38, suffix: "+", label: "Projects Showcased", decimals: 0 },
  { value: 6, suffix: "", label: "Pro Design Tools", decimals: 0 },
];

export const about = {
  title: "Designer by passion, printer-ready by profession",
  paragraphs: [
    "Assalam-o-Alaikum! I'm Hammad Shabir, the creative mind behind Al-Hammad Graphics. For more than four years I have been designing in real printing-press environments, where every design has to look great on screen and come out perfect on paper, flex and vinyl.",
    "Working at Sheerazi Printers and SJ Printers taught me speed, accuracy and how real clients think. From a shop's first logo to a full panaflex banner, wedding cards, visiting cards and daily social media posts — I design with purpose, not just decoration.",
    "Today, through Al-Hammad Graphics, I help businesses, shops, brands and creators build a strong visual identity that people remember.",
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
  "Social Media",
  "Flex & Banners",
  "Visiting Cards",
  "Letterheads & Bill Books",
  "Menus & Flyers",
  "Certificates",
  "Logo & Packaging"
];

// Real client work by Hammad. Images live in public/works (full) and public/works/thumbs (fast previews).
// To add a new design: put image in both folders and add one line here.
export const works = [
  { file: "batool-fashion-visiting-card.jpg", title: "Batool Fashion Visiting Card", cat: "Visiting Cards", w: 640, h: 366 },
  { file: "tariq-travels-visiting-card.jpg", title: "Tariq Travels & Tours Card", cat: "Visiting Cards", w: 640, h: 366 },
  { file: "feminine-style-card.jpg", title: "Feminine Style by AS Card", cat: "Visiting Cards", w: 640, h: 823 },
  { file: "lahori-shawarma-letterhead.jpg", title: "Lahori Data Shawarma Letterhead", cat: "Letterheads & Bill Books", w: 637, h: 900 },
  { file: "kashif-property-letterhead.jpg", title: "Kashif Property Center Letterhead", cat: "Letterheads & Bill Books", w: 637, h: 900 },
  { file: "makkah-hardware-bill-book.jpg", title: "Makkah Hardware Bill Book", cat: "Letterheads & Bill Books", w: 636, h: 900 },
  { file: "madina-bolt-center-bill-book.jpg", title: "Madina Bolt Center Bill Book", cat: "Letterheads & Bill Books", w: 640, h: 427 },
  { file: "rehman-fast-food-post.jpg", title: "Rehman Fast Food Post", cat: "Social Media", w: 640, h: 491 },
  { file: "rehman-fast-food-banner.jpg", title: "Rehman Fast Food Creative", cat: "Social Media", w: 640, h: 421 },
  { file: "zinger-burger-post.jpg", title: "Zinger Burger Post", cat: "Social Media", w: 640, h: 587 },
  { file: "paratha-roll-post.jpg", title: "Paratha Roll Post", cat: "Social Media", w: 640, h: 671 },
  { file: "rehman-shawarma-menu-post.jpg", title: "Rehman Shawarma Menu Post", cat: "Social Media", w: 577, h: 900 },
  { file: "ks-cheesy-discount-post.jpg", title: "K.S Cheesy 15% Discount", cat: "Social Media", w: 640, h: 640 },
  { file: "rare-cafe-deals-post.jpg", title: "RARE Cafe Teria Deals", cat: "Social Media", w: 640, h: 890 },
  { file: "rare-cafe-story.jpg", title: "RARE Rabi ul Awal Story", cat: "Social Media", w: 364, h: 900 },
  { file: "aminah-congratulations-post.jpg", title: "Aminah Congratulations Post", cat: "Social Media", w: 640, h: 675 },
  { file: "ks-cheesy-flex.jpg", title: "K.S Cheesy Shop Flex", cat: "Flex & Banners", w: 640, h: 320 },
  { file: "ks-cheesy-strip-banner.jpg", title: "K.S Cheesy Strip Banner", cat: "Flex & Banners", w: 640, h: 106 },
  { file: "fine-tailors-board.jpg", title: "Fine Tailors Shop Board", cat: "Flex & Banners", w: 640, h: 369 },
  { file: "subhan-burger-flex.jpg", title: "Subhan Burger & Shawarma Flex", cat: "Flex & Banners", w: 640, h: 274 },
  { file: "hm-sale-mart-flex.jpg", title: "HM Sale Mart & Stationers Flex", cat: "Flex & Banners", w: 640, h: 320 },
  { file: "anjum-driving-school-flex.jpg", title: "Anjum Driving School Flex", cat: "Flex & Banners", w: 640, h: 520 },
  { file: "right-pizza-banner.jpg", title: "Right Pizza & Fast Food Banner", cat: "Flex & Banners", w: 640, h: 386 },
  { file: "bano-ladies-corner-board.jpg", title: "Bano Ladies Corner Board", cat: "Flex & Banners", w: 640, h: 128 },
  { file: "bano-ladies-standee.jpg", title: "Bano Ladies Corner Standee", cat: "Flex & Banners", w: 425, h: 900 },
  { file: "bano-ladies-panel.jpg", title: "Bano Ladies Product Panel", cat: "Flex & Banners", w: 387, h: 900 },
  { file: "bano-ladies-panaflex-set.jpg", title: "Bano Ladies Panaflex Set", cat: "Flex & Banners", w: 425, h: 900 },
  { file: "sundaes-shakes-menu.jpg", title: "Sundaes & Shakes Menu", cat: "Menus & Flyers", w: 640, h: 410 },
  { file: "dessert-menu-board.jpg", title: "Dessert Menu Board", cat: "Menus & Flyers", w: 640, h: 410 },
  { file: "sahil-restaurant-menu.jpg", title: "Sahil Restaurant Menu", cat: "Menus & Flyers", w: 489, h: 699 },
  { file: "anjum-driving-school-flyer.jpg", title: "Anjum Driving School Flyer", cat: "Menus & Flyers", w: 400, h: 900 },
  { file: "lahore-medical-lab-form.jpg", title: "Lahore Medical Laboratories Form", cat: "Menus & Flyers", w: 640, h: 887 },
  { file: "city-school-farewell-certificate.jpg", title: "City School Farewell Certificate", cat: "Certificates", w: 640, h: 453 },
  { file: "certificate-of-appreciation.jpg", title: "Certificate of Appreciation", cat: "Certificates", w: 640, h: 472 },
  { file: "certificate-of-appreciation-blue.jpg", title: "Appreciation Certificate (Blue)", cat: "Certificates", w: 640, h: 452 },
  { file: "hunjra-light-decorators-logo.jpg", title: "Hunjra Light & Decorators Logo", cat: "Logo & Packaging", w: 640, h: 680 },
  { file: "niacinamide-serum-bottle.jpg", title: "Niacinamide Serum Packaging", cat: "Logo & Packaging", w: 600, h: 900 },
  { file: "niacinamide-serum-labels.jpg", title: "Niacinamide Serum Labels", cat: "Logo & Packaging", w: 640, h: 427 },
];

export const experience = [
  {
    company: "Al-Hammad Graphics",
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

export const steps = [
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
