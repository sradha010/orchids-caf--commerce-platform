"use client";

import Link from "next/link";
import { useState } from "react";

const MENU_ITEMS = [
  {
    category: "Coffee ☕",
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
    ],
  },
  {
    category: "Cold Coffee 🧊",
    items: [
      { name: "Cold Brew", description: "12-hour steeped smooth cold brew", price: "₹200" },
      { name: "Cold Brew with Milk", description: "Cold brew topped with fresh milk", price: "₹220" },
      { name: "Vanilla Sweet Cream Cold Brew", description: "Cold brew with house vanilla sweet cream", price: "₹250" },
      { name: "Salted Caramel Cold Brew", description: "Cold brew with salted caramel swirl", price: "₹260" },
      { name: "AMA Style Cold Brew", description: "Our signature house cold brew blend", price: "₹270" },
      { name: "Iced Latte", description: "Espresso over ice with chilled milk", price: "₹210" },
      { name: "Iced Mocha", description: "Espresso, chocolate sauce & cold milk over ice", price: "₹230" },
      { name: "Nutella Iced Latte", description: "Creamy Nutella blended into an iced latte", price: "₹250" },
    ],
  },
  {
    category: "Specialty Brews 🫖",
    items: [
      { name: "French Press", description: "Full-bodied, rich immersion brew", price: "₹220" },
      { name: "Pour Over", description: "Clean, precise single-cup pour over", price: "₹240" },
      { name: "Himalayan Blend", description: "Curated high-altitude beans, brewed fresh", price: "₹260" },
      { name: "Single Origin Coffee", description: "Rotating single-origin — ask your barista", price: "₹280" },
    ],
  },
  {
    category: "Frappes 🥤",
    items: [
      { name: "Java Chip Frappe", description: "Blended coffee with chocolate chips & cream", price: "₹280" },
      { name: "Oreo Frappe", description: "Crushed Oreos blended with coffee & milk", price: "₹280" },
      { name: "Strawberry Frappe", description: "Fresh strawberry blended frappe", price: "₹270" },
      { name: "Nutella Frappe", description: "Nutella blended to smooth, icy perfection", price: "₹290" },
      { name: "Chocolate Brownie Frappe", description: "Rich chocolate brownie blended frappe", price: "₹290" },
      { name: "Red Velvet Frappe", description: "Velvety red & creamy blended frappe", price: "₹285" },
      { name: "Vanilla Frappe", description: "Classic smooth vanilla blended frappe", price: "₹260" },
    ],
  },
  {
    category: "Bubble Tea 🧋",
    items: [
      { name: "Original Milk Bubble Tea", description: "Classic creamy milk tea with tapioca pearls", price: "₹260" },
      { name: "Mango Bubble Tea", description: "Tropical mango tea with tapioca pearls", price: "₹270" },
      { name: "Taro Bubble Tea", description: "Creamy taro milk tea with chewy pearls", price: "₹270" },
      { name: "Matcha Bubble Tea", description: "Japanese matcha with milk & tapioca pearls", price: "₹280" },
      { name: "Strawberry Matcha", description: "Layered strawberry & matcha bubble tea", price: "₹290" },
    ],
  },
  {
    category: "Hot Beverages 🍫",
    items: [
      { name: "Classic Hot Chocolate", description: "Smooth creamy hot chocolate", price: "₹180" },
      { name: "Dark Hot Chocolate", description: "Intense dark cocoa, less sweet", price: "₹190" },
      { name: "Hazelnut Hot Chocolate", description: "Hot chocolate with hazelnut richness", price: "₹210" },
      { name: "Oreo Hot Chocolate", description: "Crushed Oreo swirled into hot chocolate", price: "₹220" },
      { name: "Nutella Hot Chocolate", description: "Creamy Nutella melted into warm milk", price: "₹230" },
    ],
  },
  {
    category: "Smoothies & Refreshers 🥭",
    items: [
      { name: "Banana Smoothie", description: "Thick creamy banana blend", price: "₹220" },
      { name: "Mango Smoothie", description: "Fresh mango blended smooth", price: "₹230" },
      { name: "Berry Smoothies", description: "Mixed berry blend", price: "₹240" },
      { name: "Milkshakes", description: "Vanilla, chocolate, strawberry", price: "₹250" },
      { name: "Fresh Juices", description: "Seasonal cold-pressed fresh juices", price: "₹160" },
      { name: "Kombucha", description: "Fermented probiotic tea", price: "₹200" },
      { name: "Lemonades", description: "Classic, mint, berry & AMA specials", price: "₹150" },
    ],
  },
  {
    category: "Mocktails 🍹",
    items: [
      { name: "Mojito", description: "Fresh mint, lime & soda — classic or flavoured", price: "₹200" },
      { name: "Sparkler", description: "Sparkling fruit & herb infused mocktail", price: "₹210" },
      { name: "Crushers", description: "Iced fruit crushers — orange, kiwi, watermelon", price: "₹190" },
      { name: "Brazilian Lemonade", description: "Creamy blended Brazilian-style limeade", price: "₹220" },
      { name: "Fresh Lime Soda", description: "Sweet, salted or mixed", price: "₹120" },
    ],
  },
];

type CartItem = {
  name: string;
  price: string;
  qty: number;
  category: string;
};

function parsePrice(price: string) {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
}

function formatPrice(amount: number) {
  return `₹${amount.toFixed(0)}`;
}

export default function CustomerPanel() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "cart">("menu");

  function addToCart(name: string, price: string, category: string) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { name, price, qty: 1, category }];
    });
  }

  function removeFromCart(name: string) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing && existing.qty > 1) {
        return prev.map((i) => i.name === name ? { ...i, qty: i.qty - 1 } : i);
      }
      return prev.filter((i) => i.name !== name);
    });
  }

  // UPDATED PLACE ORDER LOGIC
  function placeOrder() {
    const orderData = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      items: cart.map(item => ({ name: item.name, qty: item.qty, price: item.price })),
      total: formatPrice(cart.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0)),
      status: "pending",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Save to localStorage so Admin tab can see it
    const currentOrders = JSON.parse(localStorage.getItem("ama_orders") || "[]");
    localStorage.setItem("ama_orders", JSON.stringify([orderData, ...currentOrders]));
    
    // Alert other tabs that a new order was saved
    window.dispatchEvent(new Event("storage"));

    setOrderPlaced(true);
    setCart([]);
    setActiveTab("menu");
  }

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalAmount = cart.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur border-b border-[#d9ccba]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[#7a6a52] hover:text-[#3b2f1e] text-sm">← Back</Link>
            <span className="text-[#d9ccba]">|</span>
            <span className="font-bold font-serif text-[#3b2f1e] text-lg">AMA Cafe</span>
            <span className="text-xs bg-[#6b8f5e] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Customer</span>
          </div>
          <button
            onClick={() => setActiveTab("cart")}
            className="relative flex items-center gap-2 bg-[#3b2f1e] text-[#f5f0e8] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#4d3d28] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#6b8f5e] text-white text-xs rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {orderPlaced && (
          <div className="mb-6 bg-[#6b8f5e] text-white px-6 py-4 rounded-2xl flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Order placed successfully!</p>
              <p className="text-sm opacity-80">We'll have it ready for you shortly.</p>
            </div>
            <button onClick={() => setOrderPlaced(false)} className="ml-auto opacity-70 hover:opacity-100 text-white">✕</button>
          </div>
        )}

        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("menu")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "menu" ? "bg-[#3b2f1e] text-[#f5f0e8]" : "bg-white border border-[#d9ccba] text-[#7a6a52] hover:border-[#c4a882]"}`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "cart" ? "bg-[#3b2f1e] text-[#f5f0e8]" : "bg-white border border-[#d9ccba] text-[#7a6a52] hover:border-[#c4a882]"}`}
          >
            Cart {totalItems > 0 && `(${totalItems})`}
          </button>
        </div>

        {activeTab === "menu" && (
          <div className="space-y-10">
            {MENU_ITEMS.map((section) => (
              <div key={section.category}>
                <h2 className="text-xl font-bold font-serif text-[#3b2f1e] mb-4 pb-2 border-b border-[#d9ccba]">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item) => {
                    const inCart = cart.find((c) => c.name === item.name);
                    return (
                      <div key={item.name} className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#ede5d8]">
                        <div>
                          <p className="font-semibold text-[#3b2f1e]">{item.name}</p>
                          <p className="text-sm text-[#9a8a72] mt-0.5">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span className="text-[#6b8f5e] font-bold text-sm">{item.price}</span>
                          {inCart ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => removeFromCart(item.name)}
                                className="w-7 h-7 rounded-full border border-[#c4a882] text-[#7a6a52] hover:bg-[#ede5d8] flex items-center justify-center font-bold text-base"
                              >−</button>
                              <span className="text-sm font-bold text-[#3b2f1e] w-4 text-center">{inCart.qty}</span>
                              <button
                                onClick={() => addToCart(item.name, item.price, section.category)}
                                className="w-7 h-7 rounded-full bg-[#3b2f1e] text-white hover:bg-[#4d3d28] flex items-center justify-center font-bold text-base"
                              >+</button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item.name, item.price, section.category)}
                              className="px-4 py-1.5 bg-[#3b2f1e] text-[#f5f0e8] rounded-full text-sm font-medium hover:bg-[#4d3d28] transition-colors"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div>
            {cart.length === 0 ? (
              <div className="text-center py-20 text-[#9a8a72]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-lg font-medium">Your cart is empty</p>
                <button onClick={() => setActiveTab("menu")} className="mt-4 px-5 py-2 bg-[#3b2f1e] text-[#f5f0e8] rounded-full text-sm font-medium hover:bg-[#4d3d28]">
                  View Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#ede5d8]">
                    <div>
                      <p className="font-semibold text-[#3b2f1e]">{item.name}</p>
                      <p className="text-sm text-[#9a8a72]">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => removeFromCart(item.name)} className="w-7 h-7 rounded-full border border-[#c4a882] text-[#7a6a52] flex items-center justify-center font-bold">−</button>
                        <span className="text-sm font-bold text-[#3b2f1e] w-4 text-center">{item.qty}</span>
                        <button onClick={() => addToCart(item.name, item.price, item.category)} className="w-7 h-7 rounded-full bg-[#3b2f1e] text-white flex items-center justify-center font-bold">+</button>
                      </div>
                      <span className="text-[#6b8f5e] font-bold text-sm w-14 text-right">
                        {formatPrice(parsePrice(item.price) * item.qty)}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="mt-6 bg-[#3b2f1e] rounded-2xl p-6 text-[#f5f0e8]">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#c4a882]">Items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-[#4d3d28] pt-3 mt-3">
                    <span>Total</span>
                    <span className="text-[#6b8f5e]">{formatPrice(totalAmount)}</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    className="mt-4 w-full py-3 bg-[#6b8f5e] hover:bg-[#5a7a4e] text-white rounded-full font-semibold text-base transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
