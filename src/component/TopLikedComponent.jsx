import { topLike } from "@/lib/api/topLike";
import React from "react";

const TopLikedComponent = async () => {
  const topLiked = await topLike();

  const getBadge = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <section className="max-w-[80%] mx-auto pt-20 pb-30 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        🏆 Top Liked Recipes Ranking
      </h2>

      <div className="space-y-4">
        {topLiked.map((item, index) => (
          <div
            key={item._id}
            className="flex items-center border border-gray-200 group dark:border-cyan-700 gap-4 dark:bg-[#111827] shadow-xl p-4 rounded-xl hover:bg-blue-500 dark:hover:bg-[#1f2937] transition"
          >
            {/* Rank */}
            <div className="text-2xl w-12 text-center font-bold">
              {getBadge(index)}
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.recipeName}
              className="w-16 h-16 rounded-lg object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.recipeName}
              </h3>

              <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                🍽 {item.category} | 🌍 {item.cuisineType} | ⏱{" "}
                {item.preparationTime} min
              </p>
            </div>

            {/* Likes */}
            <div className="text-cyan-500 font-bold text-lg">
              💙 {item.like}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopLikedComponent;