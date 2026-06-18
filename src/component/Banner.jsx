"use client";

import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative bg-[#0B1120] text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-[80%] items-center px-4">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover & Share <span className="text-sky-400">Amazing Recipes</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Explore thousands of delicious recipes from around the world.
            Cook smarter, faster, and healthier with RecipeHub.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/browse"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-medium hover:opacity-90 transition"
            >
              Explore Recipes
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-gray-600 px-6 py-3 font-medium hover:bg-gray-800 transition"
            >
              See Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 text-sm text-gray-400">
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              Recipes
            </div>

            <div>
              <p className="text-2xl font-bold text-white">5K+</p>
              Chefs
            </div>

            <div>
              <p className="text-2xl font-bold text-white">1M+</p>
              Users
            </div>
          </div>
        </div>

        <div className="hidden md:block flex-1 text-right">
          <div className="flex justify-center">
            <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
                alt="Food Banner"
                className="rounded-3xl shadow-2xl h-[60%] w-[60%]"
            />
          </div>
        </div>
      </div>

      {/* Glow Background */}
      <div className="absolute -top-40 right-0 h-96 w-96 bg-sky-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Banner;