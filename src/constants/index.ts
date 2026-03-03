export const SITE_CONFIG = {
  name: "AMA Cafe",
  description: "Handcrafted coffee, fresh bites, and a warm atmosphere in the heart of Majnu-ka-tilla, New Delhi.",
  url: "https://amacafe.in",
  ogImage: "https://amacafe.in/og.jpg",
  links: {
    instagram: "https://instagram.com/amacafe",
    facebook: "https://facebook.com/amacafe",
  },
  address: "House No. 6, 1st Floor, New Aruna Colony, Majnu-ka-tilla, New Aruna Nagar, New Delhi, Delhi 110054",
  phone: "+91 98765 43210",
  email: "hello@amacafe.in",
  hours: {
    weekdays: "Mon – Fri: 8:00 AM – 9:00 PM",
    weekends: "Sat – Sun: 9:00 AM – 10:00 PM",
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/#about" },
  { label: "Find Us", href: "/#contact" },
];

export const MENU_ITEMS = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", description: "Rich & bold single origin shot", price: "₹120" },
      { name: "Cappuccino", description: "Velvety steamed milk with espresso", price: "₹180" },
      { name: "Cold Brew", description: "Slow-steeped 18 hours, smooth & strong", price: "₹200" },
      { name: "Mocha", description: "Espresso, chocolate & steamed milk", price: "₹210" },
    ],
  },
  {
    category: "Frappes",
    items: [
      { name: "Java Chip Frappe", description: "Blended coffee with chocolate chips & cream", price: "₹280" },
      { name: "Strawberry Frappe", description: "Fresh strawberry blended frappe", price: "₹270" },
      { name: "Chocolate Brownie Frappe", description: "Rich chocolate brownie blended frappe", price: "₹290" },
      { name: "Red Velvet Frappe", description: "Velvety red & creamy blended frappe", price: "₹285" },
    ],
  },
  {
    category: "Speciality Brews",
    items: [
      { name: "French Press", description: "Full-bodied, rich immersion brew", price: "₹220" },
      { name: "Himalayan Blend", description: "Curated high-altitude beans, brewed fresh", price: "₹260" },
      { name: "Pour Over", description: "Clean, precise single-cup pour over", price: "₹240" },
      { name: "Single Origin Coffee", description: "Rotating single-origin, ask your barista today", price: "₹280" },
    ],
  },
];
