import { Pizza, Salad, Cake, Coffee } from "lucide-react";

const Section2 = () => {
  const data = [
    { icon: Pizza, name: "Fast Food" },
    { icon: Salad, name: "Healthy" },
    { icon: Cake, name: "Dessert" },
    { icon: Coffee, name: "Drinks" },
  ];

  return (
    <section className="bg-[#0B1120] text-white py-20 relative overflow-hidden">
      <div className="max-w-[80%] mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold">
          Popular Categories
        </h2>

        <p className="mt-3 text-slate-400">
          Explore by food type
        </p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/60 border-2 border-cyan-500 hover:border-cyan-500 transition animate-float"
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <item.icon
                className="mx-auto text-cyan-400"
                size={40}
              />

              <h3 className="mt-3 text-lg font-semibold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;