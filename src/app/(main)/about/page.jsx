"use client";

import { BookOpen, ChefHat, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/component/Reveal";

const page = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-24"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

        <div className="relative z-10 mx-auto max-w-[80%] text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            About
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              RecipeHub
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Discover, share, and explore delicious recipes from around the
            world. RecipeHub is a community-driven platform where food lovers
            connect through their passion for cooking.
          </p>
        </div>
      </motion.section>

      {/* Features */}
      <Reveal>
        <section className="mx-auto max-w-[80%] py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <BookOpen className="mb-4 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-xl font-semibold">
                Thousands of Recipes
              </h3>
              <p className="text-slate-400">
                Browse a growing collection of recipes from different cuisines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <ChefHat className="mb-4 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-xl font-semibold">
                Expert Cooking Tips
              </h3>
              <p className="text-slate-400">
                Learn techniques and cooking secrets from experienced chefs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <Users className="mb-4 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-xl font-semibold">
                Community Driven
              </h3>
              <p className="text-slate-400">
                Connect with fellow food enthusiasts and share your creations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <Sparkles className="mb-4 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-xl font-semibold">Easy Discovery</h3>
              <p className="text-slate-400">
                Search and filter recipes to find your next favorite meal.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Mission */}
      <Reveal>
        <section className="mx-auto max-w-[80%] py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-semibold text-cyan-400">
                OUR MISSION
              </span>

              <h2 className="mt-4 mb-6 text-4xl font-bold">
                Making Cooking More Accessible for Everyone
              </h2>

              <p className="leading-relaxed text-slate-400">
                RecipeHub was built with a simple goal: to bring together food
                lovers from around the world. Whether you are a beginner
                learning your first recipe or an experienced chef sharing your
                signature dish, RecipeHub provides a place to discover and
                contribute.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-10 transition duration-300 hover:from-blue-700 hover:to-cyan-600">
              <h3 className="mb-6 text-3xl font-bold">
                Why Choose RecipeHub?
              </h3>

              <ul className="space-y-4 text-slate-300">
                <li>✓ Easy recipe sharing experience</li>
                <li>✓ Smart search and filtering</li>
                <li>✓ Multiple cuisine categories</li>
                <li>✓ Beautiful and responsive design</li>
                <li>✓ Community interaction features</li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Stats */}
      <Reveal>
        <section className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-[80%]">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">500+</h3>
                <p className="mt-2 text-slate-400">Recipes</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
                <p className="mt-2 text-slate-400">Categories</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">1K+</h3>
                <p className="mt-2 text-slate-400">Food Lovers</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
                <p className="mt-2 text-slate-400">Passion for Food</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Share Your Favorite Recipe?
            </h2>

            <p className="mb-8 text-slate-400">
              Join our growing community and inspire others with your cooking
              creations.
            </p>

            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition hover:scale-105">
              Start Sharing Today
            </button>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default page;