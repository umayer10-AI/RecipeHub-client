"use client";

import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900 dark:bg-[#0B1120] dark:text-white">
      {/* Glow Background */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/20"></div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20"></div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[80%] items-center px-4">
        {/* Left Content */}
        <div className="max-w-2xl 2xl:flex-1">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Discover & Share{" "}
            <span className="text-sky-500 dark:text-sky-400">
              Amazing Recipes
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Explore thousands of delicious recipes from around the world.
            Cook smarter, faster, and healthier with RecipeHub.
          </p>

          <div className="relative z-20 mt-8 flex items-center gap-4">
            <Link
              href="/browse"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Explore Recipes
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
            >
              See Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 text-sm text-black dark:text-gray-400">
            <div>
              <p className="text-2xl font-bold text-black dark:text-white">
                10K+
              </p>
              Recipes
            </div>

            <div>
              <p className="text-2xl font-bold text-black dark:text-white">
                5K+
              </p>
              Chefs
            </div>

            <div>
              <p className="text-2xl font-bold text-black dark:text-white">
                1M+
              </p>
              Users
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden flex-1 text-right md:block">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
              alt="Food Banner"
              className="h-[60%] w-[60%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;