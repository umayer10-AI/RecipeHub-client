import Link from "next/link";

const Section4 = () => {
  return (
    <section className="relative bg-[#0B1120] text-white pt-30 pb-40 overflow-hidden">
      <div className="absolute -bottom-32 right-0 h-96 w-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-[80%] mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold">
          Start Your Cooking Journey Today
        </h2>
        <p className="mt-3 text-slate-400">
          Join thousands of food lovers on RecipeHub
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-medium hover:opacity-90"
          >
            Get Started
          </Link>

          <Link
            href="/browse"
            className="rounded-xl border border-slate-600 px-6 py-3 font-medium hover:bg-slate-800"
          >
            Browse Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section4;