"use client";

import { useState } from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";

const MENU_CATEGORIES = [
  {
    id: "coffee",
    label: "Coffee",
    icon: "☕",
    items: [
      { name: "Espresso", description: "Rich, concentrated single shot", price: "₹120" },
      { name: "Americano", description: "Hot or Iced — espresso with hot/cold water", price: "₹150" },
      { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "₹180" },
      { name: "Latte", description: "Smooth espresso with creamy steamed milk", price: "₹190" },
      { name: "Flat White", description: "Velvety microfoam over a double shot", price: "₹200" },
      { name: "Macchiato", description: "Espresso marked with a dash of milk", price: "₹170" },
      { name: "Cortado", description: "Equal parts espresso and warm milk", price: "₹175" },
      { name: "Mocha", description: "Espresso, chocolate & steamed milk", price: "₹210" },
      { name: "Caramel Macchiato", description: "Vanilla, milk, espresso & caramel drizzle", price: "₹220" },
      { name: "Oat Milk Coffee", description: "Any coffee made with creamy oat milk", price: "₹230" },
      { name: "Vegan Milk Options", description: "Oat, almond, soy — available on request", price: "+₹30" },
    ],
  },
  {
    id: "cold-coffee",
    label: "Cold Coffee",
    icon: "🧊",
    items: [
      { name: "Cold Brew", description: "12-hour steeped smooth cold brew", price: "₹200" },
      { name: "Cold Brew with Milk", description: "Cold brew topped with fresh milk", price: "₹220" },
      { name: "Vanilla Sweet Cream Cold Brew", description: "Cold brew with house vanilla sweet cream", price: "₹250" },
      { name: "Salted Caramel Cold Brew", description: "Cold brew with salted caramel swirl", price: "₹260" },
      { name: "AMA Style Cold Brew", description: "Our signature house cold brew blend", price: "₹270" },
      { name: "Iced Latte", description: "Espresso over ice with chilled milk — multiple variants", price: "₹210" },
      { name: "Iced Mocha", description: "Espresso, chocolate sauce & cold milk over ice", price: "₹230" },
      { name: "Nutella Iced Latte", description: "Creamy Nutella blended into an iced latte", price: "₹250" },
    ],
  },
  {
    id: "specialty-brews",
    label: "Specialty Brews",
    icon: "🫖",
    items: [
      { name: "French Press", description: "Full-bodied, rich immersion brew", price: "₹220" },
      { name: "Pour Over", description: "Clean, precise single-cup pour over", price: "₹240" },
      { name: "Himalayan Blend", description: "Curated high-altitude beans, brewed fresh", price: "₹260" },
      { name: "Single Origin Coffee", description: "Rotating single-origin, ask your barista today", price: "₹280" },
    ],
  },
  {
    id: "frappes",
    label: "Frappes",
    icon: "🥤",
    items: [
      { name: "Java Chip Frappe", description: "Blended coffee with chocolate chips & cream", price: "₹280" },
      { name: "Oreo Frappe", description: "Crushed Oreos blended with coffee & milk", price: "₹280" },
      { name: "Strawberry Frappe", description: "Fresh strawberry blended frappe", price: "₹270" },
      { name: "Nutella Frappe", description: "Nutella blended to a smooth, icy perfection", price: "₹290" },
      { name: "Chocolate Brownie Frappe", description: "Rich chocolate brownie blended frappe", price: "₹290" },
      { name: "Red Velvet Frappe", description: "Velvety red & creamy blended frappe", price: "₹285" },
      { name: "Vanilla Frappe", description: "Classic smooth vanilla blended frappe", price: "₹260" },
    ],
  },
  {
    id: "bubble-tea",
    label: "Bubble Tea",
    icon: "🧋",
    items: [
      { name: "Original Milk Bubble Tea", description: "Classic creamy milk tea with tapioca pearls", price: "₹260" },
      { name: "Mango Bubble Tea", description: "Tropical mango tea with tapioca pearls", price: "₹270" },
      { name: "Taro Bubble Tea", description: "Creamy taro milk tea with chewy pearls", price: "₹270" },
      { name: "Matcha Bubble Tea", description: "Japanese matcha with milk & tapioca pearls", price: "₹280" },
      { name: "Strawberry Matcha", description: "Layered strawberry & matcha bubble tea", price: "₹290" },
      { name: "Popping Boba", description: "Choose your flavour — mango, strawberry, lychee", price: "+₹40" },
    ],
  },
  {
    id: "hot-beverages",
    label: "Hot Beverages",
    icon: "🍫",
    items: [
      { name: "Classic Hot Chocolate", description: "Smooth creamy hot chocolate", price: "₹180" },
      { name: "Dark Hot Chocolate", description: "Intense dark cocoa, less sweet", price: "₹190" },
      { name: "Hazelnut Hot Chocolate", description: "Hot chocolate with hazelnut richness", price: "₹210" },
      { name: "Oreo Hot Chocolate", description: "Crushed Oreo swirled into hot chocolate", price: "₹220" },
      { name: "Nutella Hot Chocolate", description: "Creamy Nutella melted into warm milk", price: "₹230" },
      { name: "Specialty Winter Drinks", description: "Ask us — seasonal hot specials change regularly", price: "Seasonal" },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies & Refreshers",
    icon: "🥭",
    items: [
      { name: "Banana Smoothie", description: "Thick creamy banana blend", price: "₹220" },
      { name: "Mango Smoothie", description: "Fresh mango blended smooth", price: "₹230" },
      { name: "Berry Smoothies", description: "Mixed berry blend — strawberry, blueberry, raspberry", price: "₹240" },
      { name: "Milkshakes", description: "Vanilla, chocolate, strawberry — ask your barista", price: "₹250" },
      { name: "Hydrators", description: "Light cucumber mint, watermelon basil & more", price: "₹180" },
      { name: "Fresh Juices", description: "Seasonal cold-pressed fresh juices", price: "₹160" },
      { name: "Kombucha", description: "Fermented probiotic tea — multiple flavours", price: "₹200" },
      { name: "Lemonades", description: "Classic, mint, berry & AMA specials", price: "₹150" },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails",
    icon: "🍹",
    items: [
      { name: "Mojito", description: "Fresh mint, lime & soda — classic or flavoured", price: "₹200" },
      { name: "Sparkler", description: "Sparkling fruit & herb infused mocktail", price: "₹210" },
      { name: "Crushers", description: "Iced fruit crushers — orange, kiwi, watermelon", price: "₹190" },
      { name: "Brazilian Lemonade", description: "Creamy blended Brazilian-style limeade", price: "₹220" },
      { name: "Fresh Lime Soda", description: "Sweet, salted or mixed — classic refresher", price: "₹120" },
    ],
  },
  {
    id: "food",
    label: "Food",
    icon: "🍽️",
    subsections: [
      {
        title: "Snacks & Starters",
        items: [
          { name: "Snacks & Starters", description: "Ask your server for today's snacks selection", price: "Varies" },
        ],
      },
      {
        title: "Platters",
        items: [
          { name: "Platters", description: "Sharing platters — ask your server for options", price: "Varies" },
        ],
      },
      {
        title: "Café Specials",
        items: [
          { name: "Café Specials", description: "AMA's signature food specials — ask your server", price: "Varies" },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Desserts", description: "Daily dessert selection — ask your server", price: "Varies" },
        ],
      },
      {
        title: "Seasonal Specials",
        items: [
          { name: "Seasonal Specials", description: "Limited seasonal offerings — ask your server", price: "Seasonal" },
        ],
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const active = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <Navbar />

      {/* Header */}
      <div className="bg-[#3b2f1e] text-[#f5f0e8] py-14 text-center px-4">
        <p className="text-[#c9a96e] text-sm font-medium tracking-widest uppercase mb-2">AMA Cafe — New Delhi</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Our Menu</h1>
        <p className="text-[#d9ccba] text-base max-w-md mx-auto">
          Crafted with care, served with warmth. Every sip and bite made fresh.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Category Tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-10">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat.id
                  ? "bg-[#3b2f1e] text-[#f5f0e8] border-[#3b2f1e]"
                  : "bg-white text-[#7a6a52] border-[#d9ccba] hover:border-[#3b2f1e] hover:text-[#3b2f1e]"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Category Content */}
        {active && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{active.icon}</span>
              <h2 className="font-serif text-3xl font-bold text-[#3b2f1e]">{active.label}</h2>
            </div>

            {/* Regular items */}
            {active.items && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {active.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl p-5 border border-[#e8ddd0] hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif text-lg font-semibold text-[#3b2f1e]">{item.name}</h3>
                      <span className="text-[#6b8f5e] font-bold text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-[#7a6a52] text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Food subsections */}
            {active.subsections && (
              <div className="space-y-10">
                {active.subsections.map((sub) => (
                  <div key={sub.title}>
                    <h3 className="font-serif text-xl font-bold text-[#3b2f1e] mb-4 pb-2 border-b border-[#d9ccba]">
                      {sub.title}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {sub.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-white rounded-2xl p-5 border border-[#e8ddd0] hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-serif text-lg font-semibold text-[#3b2f1e]">{item.name}</h3>
                            <span className="text-[#6b8f5e] font-bold text-sm whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-[#7a6a52] text-sm mt-1 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-[#3b2f1e] rounded-3xl py-10 px-6">
          <h3 className="font-serif text-2xl font-bold text-[#f5f0e8] mb-2">Ready to order?</h3>
          <p className="text-[#d9ccba] mb-6 text-sm">Place your order online or visit us at Majnu-ka-tilla, New Delhi.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/customer"
              className="inline-flex items-center justify-center rounded-full bg-[#6b8f5e] px-6 py-3 text-sm font-medium text-white hover:bg-[#5a7a4e] transition-colors"
            >
              Order Now
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d9ccba] px-6 py-3 text-sm font-medium text-[#d9ccba] hover:bg-white/10 transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
