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
      { name: "Espresso", description: "Rich & bold single origin shot", price: "$3.50" },
      { name: "Cappuccino", description: "Velvety steamed milk with espresso", price: "$4.50" },
      { name: "Cold Brew", description: "Slow-steeped 18 hours, smooth & strong", price: "$5.00" },
      { name: "Lavender Latte", description: "House-made lavender syrup & oat milk", price: "$5.50" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Butter Croissant", description: "Flaky layers, baked fresh each morning", price: "$3.75" },
      { name: "Blueberry Scone", description: "Wild blueberry with lemon glaze", price: "$4.00" },
      { name: "Cinnamon Roll", description: "Soft & gooey with cream cheese icing", price: "$4.50" },
      { name: "Banana Bread", description: "Moist loaf with walnuts & honey", price: "$3.50" },
    ],
  },
  {
    category: "Seasonal Specials",
    items: [
      { name: "Maple Cortado", description: "Espresso with warm maple & oat milk", price: "$5.00" },
      { name: "Rose Hip Tea", description: "Dried rose hip & hibiscus blend", price: "$3.75" },
      { name: "Honey Chai", description: "Spiced chai with raw wildflower honey", price: "$4.75" },
      { name: "Matcha Bloom", description: "Ceremonial matcha with steamed oat milk", price: "$5.25" },
    ],
  },
];
