import { MENU_ITEMS } from "@/constants";

export function Features() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#f5f0e8]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-[#6b8f5e] text-sm font-semibold mb-3">
            What we serve
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#3b2f1e] font-serif">
            Our Menu
          </h2>
          <p className="mt-4 text-[#7a6a52] max-w-xl mx-auto">
            Everything made fresh, in-house, daily. Simple ingredients. Honest flavours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MENU_ITEMS.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-bold text-[#3b2f1e] font-serif border-b border-[#c4a882] pb-3 mb-5 uppercase tracking-widest text-sm">
                {category.category}
              </h3>
              <ul className="space-y-5">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#3b2f1e]">{item.name}</p>
                      <p className="text-sm text-[#9a8a72] mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-[#6b8f5e] font-semibold whitespace-nowrap text-sm">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
