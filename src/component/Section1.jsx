const Section1 = () => {
  return (
    <section className="relative bg-[#0B1120] text-white py-30 overflow-hidden">
      <div className="absolute -top-32 left-0 h-96 w-96 bg-sky-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-[80%] mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="mt-3 text-slate-400">Just 3 simple steps to start cooking</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: "Search Recipes", desc: "Find your favorite dishes easily." },
            { title: "Follow Instructions", desc: "Step-by-step cooking guide." },
            { title: "Enjoy Food", desc: "Cook & share with friends." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;