import Link from 'next/link';
import React from 'react';
import FavouriteDelete from './FavouriteDelete';

const FavouriteCards = ({recipes}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
  {recipes.map((recipe) => (
    <div
      key={recipe._id}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition hover:-translate-y-1 hover:border-cyan-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.recipeName}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute right-3 top-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-700 px-3 py-1 text-xs font-medium">
          {recipe.cuisineType}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-white">
          {recipe.recipeName}
        </h2>

        <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
          <span>❤️ {recipe.like} Likes</span>
          <span>{recipe.category}</span>
        </div>


        {/* Buttons */}
        <div className="flex gap-2">
          <Link href={`/browse/${recipe?.saveId}`}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            View
          </Link>

          <FavouriteDelete filter={recipe?._id}></FavouriteDelete>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
    );
};

export default FavouriteCards;