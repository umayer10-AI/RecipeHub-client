const Section3 = () => {
  return (
    <section className="bg-[#0B1120] text-white py-30">
      <div className="max-w-[80%] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">What Users Say</h2>
        <p className="mt-3 text-slate-400">Real feedback from our users</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Rahim",
              text: "RecipeHub made cooking so easy and fun!",
            },
            {
              name: "Karim",
              text: "Best platform for discovering new recipes.",
            },
            {
              name: "Nusrat",
              text: "I love the UI and simplicity!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800"
            >
              <p className="text-slate-300">{t.text}</p>
              <h4 className="mt-4 font-semibold text-cyan-400">- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;