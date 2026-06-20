import Link from "next/link";
import {
  Clock,
  Globe,
  UtensilsCrossed,
  Eye,
  Star,
} from "lucide-react";
import { getFeature } from "@/lib/api/admin/users";

const Dynamic1 = async () => {

    const featuredRecipes = await getFeature()

  return (
    <section className="max-w-[80%] mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white">
          Featured Recipes ✨
        </h2>
        <p className="mt-3 text-slate-400">
          Discover our hand-picked featured recipes
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {featuredRecipes?.map((recipe) => (
          <div
            key={recipe._id}
            className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.recipeName}
                className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
                <Star size={14} fill="currentColor" />
                Featured
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="mb-3 text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 w-fit text-transparent bg-clip-text">
                {recipe.recipeName}
              </h3>

              <div className="space-y-1">
                <div className="flex items-center gap-3 text-slate-300">
                  <UtensilsCrossed
                    size={18}
                    className="text-orange-400"
                  />
                  <span>
                    <span className="font-medium text-white">
                      Category:
                    </span>{" "}
                    {recipe.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Globe size={18} className="text-cyan-400" />
                  <span>
                    <span className="font-medium text-white">
                      Cuisine:
                    </span>{" "}
                    {recipe.cuisineType}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Clock size={18} className="text-green-400" />
                  <span>
                    <span className="font-medium text-white">
                      Preparation:
                    </span>{" "}
                    {recipe.preparationTime} mins
                  </span>
                </div>
              </div>

              <div className="mt-3 border-t border-slate-800 pt-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  By{" "}
                  <span className="text-white font-medium">
                    {recipe.userName}
                  </span>
                </span>

                <Link
                  href={`/browse/${recipe.recipeId}`}
                  className="flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-700 px-4 py-2 text-sm font-medium transition hover:bg-yellow-400"
                >
                
                  <Eye size={16} />
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dynamic1;