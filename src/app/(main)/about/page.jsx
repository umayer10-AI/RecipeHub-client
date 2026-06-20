import { BookOpen, ChefHat, Users, Sparkles } from "lucide-react";

const page = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

        <div className="max-w-[80%] mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              RecipeHub
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Discover, share, and explore delicious recipes from around the
            world. RecipeHub is a community-driven platform where food lovers
            connect through their passion for cooking.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-[80%] mx-auto py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <BookOpen className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Thousands of Recipes
            </h3>
            <p className="text-slate-400">
              Browse a growing collection of recipes from different cuisines.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <ChefHat className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Cooking Tips</h3>
            <p className="text-slate-400">
              Learn techniques and cooking secrets from experienced chefs.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Users className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-slate-400">
              Connect with fellow food enthusiasts and share your creations.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Sparkles className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Discovery</h3>
            <p className="text-slate-400">
              Search and filter recipes to find your next favorite meal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-[80%] mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 font-semibold">OUR MISSION</span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Making Cooking More Accessible for Everyone
            </h2>

            <p className="text-slate-400 leading-relaxed">
              RecipeHub was built with a simple goal: to bring together food
              lovers from around the world. Whether you are a beginner learning
              your first recipe or an experienced chef sharing your signature
              dish, RecipeHub provides a place to discover and contribute.
            </p>
          </div>

          <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6">Why Choose RecipeHub?</h3>

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

      {/* Stats */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">500+</h3>
              <p className="text-slate-400 mt-2">Recipes</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
              <p className="text-slate-400 mt-2">Categories</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">1K+</h3>
              <p className="text-slate-400 mt-2">Food Lovers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-slate-400 mt-2">Passion for Food</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Share Your Favorite Recipe?
          </h2>

          <p className="text-slate-400 mb-8">
            Join our growing community and inspire others with your cooking
            creations.
          </p>

          <button className="px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition">
            Start Sharing Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;