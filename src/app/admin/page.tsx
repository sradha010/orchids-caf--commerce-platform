"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MENU_ITEMS as INITIAL_MENU, SITE_CONFIG } from "@/constants";

type MenuItem = { name: string; description: string; price: string };
type MenuSection = { category: string; items: MenuItem[] };
type Order = {
  id: string;
  items: { name: string; qty: number; price: string }[];
  total: string;
  status: "pending" | "preparing" | "ready" | "done";
  time: string;
};

const STATUS_COLORS: Record<Order["status"], string> = {
  pending: "bg-amber-100 text-amber-700",
  preparing: "bg-blue-100 text-blue-700",
  ready: "bg-green-100 text-green-700",
  done: "bg-gray-100 text-gray-500",
};

const STATUS_NEXT: Record<Order["status"], Order["status"] | null> = {
  pending: "preparing",
  preparing: "ready",
  ready: "done",
  done: null,
};

const ADMIN_CREDENTIALS = { username: "amacafe", password: "ama@admin2024" };

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"orders" | "menu">("orders");
  
  // UPDATED: Initialize with empty array and load from storage
  const [orders, setOrders] = useState<Order[]>([]);
  const [menu, setMenu] = useState<MenuSection[]>(INITIAL_MENU);

  // Menu editing state
  const [editingItem, setEditingItem] = useState<{ sIdx: number; iIdx: number } | null>(null);
  const [editForm, setEditForm] = useState<MenuItem>({ name: "", description: "", price: "" });
  const [addingTo, setAddingTo] = useState<number | null>(null);
  const [addForm, setAddForm] = useState<MenuItem>({ name: "", description: "", price: "" });

  // --- SYNC ENGINE ADDED HERE ---
  useEffect(() => {
    const loadOrders = () => {
      const saved = localStorage.getItem("ama_orders");
      if (saved) {
        setOrders(JSON.parse(saved));
      }
    };

    loadOrders(); // Initial load

    // Listen for the "Place Order" event from the customer tab
    window.addEventListener("storage", loadOrders);
    return () => window.removeEventListener("storage", loadOrders);
  }, []);

  function advanceOrder(id: string) {
    const updatedOrders = orders.map((o) =>
      o.id === id && STATUS_NEXT[o.status] ? { ...o, status: STATUS_NEXT[o.status]! } : o
    );
    setOrders(updatedOrders);
    // Save the status change back to storage
    localStorage.setItem("ama_orders", JSON.stringify(updatedOrders));
  }
  // --- END OF SYNC ENGINE ---

  function startEdit(sIdx: number, iIdx: number) {
    setEditingItem({ sIdx, iIdx });
    setEditForm({ ...menu[sIdx].items[iIdx] });
  }

  function saveEdit() {
    if (!editingItem) return;
    const { sIdx, iIdx } = editingItem;
    setMenu((prev) => {
      const updated = prev.map((s, si) => ({
        ...s,
        items: s.items.map((it, ii) => (si === sIdx && ii === iIdx ? { ...editForm } : it)),
      }));
      return updated;
    });
    setEditingItem(null);
  }

  function deleteItem(sIdx: number, iIdx: number) {
    setMenu((prev) =>
      prev.map((s, si) =>
        si === sIdx ? { ...s, items: s.items.filter((_, ii) => ii !== iIdx) } : s
      )
    );
  }

  function saveAdd(sIdx: number) {
    if (!addForm.name.trim()) return;
    setMenu((prev) =>
      prev.map((s, si) => (si === sIdx ? { ...s, items: [...s.items, { ...addForm }] } : s))
    );
    setAddingTo(null);
    setAddForm({ name: "", description: "", price: "" });
  }

  const pendingCount = orders.filter((o) => o.status === "pending" || o.status === "preparing").length;

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (
      loginForm.username === ADMIN_CREDENTIALS.username &&
      loginForm.password === ADMIN_CREDENTIALS.password
    ) {
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-md border border-[#ede5d8] p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-serif text-[#3b2f1e]">AMA Cafe</h1>
            <p className="text-sm text-[#9a8a72] mt-1">Staff / Admin Login</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#7a6a52] mb-1 uppercase tracking-wider">Username</label>
              <input
                type="text"
                autoComplete="username"
                value={loginForm.username}
                onChange={(e) => setLoginForm((f) => ({ ...f, username: e.target.value }))}
                className="w-full rounded-xl border border-[#d9ccba] px-4 py-2.5 text-sm text-[#3b2f1e] bg-[#fdf9f4] focus:outline-none focus:border-[#6b8f5e]"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#7a6a52] mb-1 uppercase tracking-wider">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                value={loginForm.password}
                onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                className="w-full rounded-xl border border-[#d9ccba] px-4 py-2.5 text-sm text-[#3b2f1e] bg-[#fdf9f4] focus:outline-none focus:border-[#6b8f5e]"
                placeholder="Enter password"
              />
            </div>
            {loginError && (
              <p className="text-red-500 text-xs text-center">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-[#3b2f1e] text-[#f5f0e8] rounded-full text-sm font-semibold hover:bg-[#4d3d28] transition-colors mt-2"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-6">
            <Link href="/" className="text-xs text-[#9a8a72] hover:text-[#3b2f1e]">← Back to website</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#3b2f1e] border-b border-[#4d3d28]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[#c4a882] hover:text-[#f5f0e8] text-sm">← Back</Link>
            <span className="text-[#4d3d28]">|</span>
            <span className="font-bold font-serif text-[#f5f0e8] text-lg">AMA Cafe</span>
            <span className="text-xs bg-[#c4a882] text-[#3b2f1e] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Admin</span>
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-sm text-[#c4a882] hover:text-[#f5f0e8] transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Stats bar - PERSERVED */}
      <div className="bg-[#4d3d28] border-b border-[#5a4a35]">
        <div className="container mx-auto px-4 py-3 flex gap-6 overflow-x-auto">
          {[
            { label: "Active Orders", value: pendingCount, color: "text-amber-300" },
            { label: "Ready to Serve", value: orders.filter((o) => o.status === "ready").length, color: "text-green-300" },
            { label: "Completed Today", value: orders.filter((o) => o.status === "done").length, color: "text-[#c4a882]" },
            { label: "Menu Items", value: menu.reduce((s, sec) => s + sec.items.length, 0), color: "text-blue-300" },
          ].map((stat) => (
            <div key={stat.label} className="shrink-0 text-center">
              <p className={`text-2xl font-bold font-serif ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-[#9a8a72]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "orders" ? "bg-[#3b2f1e] text-[#f5f0e8]" : "bg-white border border-[#d9ccba] text-[#7a6a52] hover:border-[#c4a882]"}`}
          >
            Orders {pendingCount > 0 && <span className="ml-1 bg-amber-400 text-[#3b2f1e] text-xs px-1.5 py-0.5 rounded-full font-bold">{pendingCount}</span>}
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === "menu" ? "bg-[#3b2f1e] text-[#f5f0e8]" : "bg-white border border-[#d9ccba] text-[#7a6a52] hover:border-[#c4a882]"}`}
          >
            Manage Menu
          </button>
        </div>

        {/* ORDERS TAB */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-center text-[#9a8a72] py-16">No orders yet.</p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border border-[#ede5d8]">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-bold text-[#3b2f1e] font-serif">{order.id}</p>
                      <p className="text-xs text-[#9a8a72] mt-0.5">{order.time}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${STATUS_COLORS[order.status]}`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-1 mb-4">
                    {order.items.map((item, idx) => (
                      <div key={item.name + idx} className="flex justify-between text-sm">
                        <span className="text-[#7a6a52]">{item.name} × {item.qty}</span>
                        <span className="text-[#3b2f1e] font-medium">{item.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm font-bold text-[#3b2f1e] border-t border-[#ede5d8] pt-2 mt-2">
                      <span>Total</span>
                      <span className="text-[#6b8f5e]">{order.total}</span>
                    </div>
                  </div>

                  {STATUS_NEXT[order.status] && (
                    <button
                      onClick={() => advanceOrder(order.id)}
                      className="w-full py-2 bg-[#3b2f1e] text-[#f5f0e8] rounded-full text-sm font-medium hover:bg-[#4d3d28] transition-colors"
                    >
                      Mark as {STATUS_NEXT[order.status]}
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* MENU MANAGEMENT TAB - PRESERVED */}
        {activeTab === "menu" && (
          <div className="space-y-10">
            {menu.map((section, sIdx) => (
              <div key={section.category}>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#d9ccba]">
                  <h2 className="text-xl font-bold font-serif text-[#3b2f1e]">{section.category}</h2>
                  <button
                    onClick={() => { setAddingTo(sIdx); setAddForm({ name: "", description: "", price: "" }); }}
                    className="text-sm text-[#6b8f5e] hover:text-[#5a7a4e] font-medium flex items-center gap-1"
                  >
                    + Add item
                  </button>
                </div>

                {/* Add new item form */}
                {addingTo === sIdx && (
                  <div className="mb-4 bg-[#ede5d8] rounded-2xl p-4 space-y-2">
                    <input
                      className="w-full rounded-lg border border-[#d9ccba] px-3 py-2 text-sm text-[#3b2f1e] bg-white focus:outline-none focus:border-[#6b8f5e]"
                      placeholder="Item name"
                      value={addForm.name}
                      onChange={(e) => setAddForm((f) => ({ ...f, name: e.target.value }))}
                    />
                    <input
                      className="w-full rounded-lg border border-[#d9ccba] px-3 py-2 text-sm text-[#3b2f1e] bg-white focus:outline-none focus:border-[#6b8f5e]"
                      placeholder="Description"
                      value={addForm.description}
                      onChange={(e) => setAddForm((f) => ({ ...f, description: e.target.value }))}
                    />
                    <input
                      className="w-full rounded-lg border border-[#d9ccba] px-3 py-2 text-sm text-[#3b2f1e] bg-white focus:outline-none focus:border-[#6b8f5e]"
                      placeholder="Price (e.g. ₹150)"
                      value={addForm.price}
                      onChange={(e) => setAddForm((f) => ({ ...f, price: e.target.value }))}
                    />
                    <div className="flex gap-2 pt-1">
                      <button onClick={() => saveAdd(sIdx)} className="px-4 py-1.5 bg-[#6b8f5e] text-white rounded-full text-sm font-medium hover:bg-[#5a7a4e]">Save</button>
                      <button onClick={() => setAddingTo(null)} className="px-4 py-1.5 border border-[#c4a882] text-[#7a6a52] rounded-full text-sm hover:bg-[#f5f0e8]">Cancel</button>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {section.items.map((item, iIdx) => (
                    <div key={item.name + iIdx}>
                      {editingItem?.sIdx === sIdx && editingItem?.iIdx === iIdx ? (
                        <div className="bg-[#ede5d8] rounded-2xl p-4 space-y-2">
                          <input
                            className="w-full rounded-lg border border-[#d9ccba] px-3 py-2 text-sm text-[#3b2f1e] bg-white focus:outline-none focus:border-[#6b8f5e]"
                            value={editForm.name}
                            onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))}
                          />
                          <input
                            className="w-full rounded-lg border border-[#d9ccba] px-3 py-2 text-sm text-[#3b2f1e] bg-white focus:outline-none focus:border-[#6b8f5e]"
                            value={editForm.description}
                            onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                          />
                          <input
                            className="w-full rounded-lg border border-[#d9ccba] px-3 py-2 text-sm text-[#3b2f1e] bg-white focus:outline-none focus:border-[#6b8f5e]"
                            value={editForm.price}
                            onChange={(e) => setEditForm((f) => ({ ...f, price: e.target.value }))}
                          />
                          <div className="flex gap-2 pt-1">
                            <button onClick={saveEdit} className="px-4 py-1.5 bg-[#6b8f5e] text-white rounded-full text-sm font-medium hover:bg-[#5a7a4e]">Save</button>
                            <button onClick={() => setEditingItem(null)} className="px-4 py-1.5 border border-[#c4a882] text-[#7a6a52] rounded-full text-sm hover:bg-[#f5f0e8]">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#ede5d8]">
                          <div>
                            <p className="font-semibold text-[#3b2f1e]">{item.name}</p>
                            <p className="text-sm text-[#9a8a72] mt-0.5">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-4 shrink-0 ml-4">
                            <span className="text-[#6b8f5e] font-bold text-sm">{item.price}</span>
                            <button onClick={() => startEdit(sIdx, iIdx)} className="text-xs text-[#7a6a52] hover:text-[#3b2f1e] font-medium">Edit</button>
                            <button onClick={() => deleteItem(sIdx, iIdx)} className="text-xs text-red-400 hover:text-red-600 font-medium">Remove</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
