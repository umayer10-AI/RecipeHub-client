import React from "react";
import { Heart, Star } from "lucide-react";
import AdminDeleteReciepe from "./AdminDeleteReciepe";
import AdminFeature from "./AdminFeature";

const ManageRecipe = ({recipes}) => {

  // console.log(recipes)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Manage Recipes 📖
        </h1>

        <p className="mt-1 text-slate-400">
          Delete recipes or toggle featured status
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
        <table className="w-full">
          <thead className="border-b border-slate-800">
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-4">Recipe</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4">Category</th>
              {/* <th className="px-6 py-4">Cuisine</th> */}
              <th className="px-6 py-4">Likes</th>
              <th className="px-6 py-4">Featured</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {recipes.map((recipe) => (
              <tr
                key={recipe._id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >
                {/* Recipe */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={recipe.image}
                      alt={recipe.recipeName}
                      className="h-12 w-12 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-medium text-white">
                        {recipe.recipeName.split(' ')[0]}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {recipe.difficultyLevel} • {recipe.preparationTime} min
                      </p>
                    </div>
                  </div>
                </td>

                {/* Author */}
                <td className="px-6 py-4 text-slate-300">
                  {recipe.userName}
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
                    {recipe.category}
                  </span>
                </td>

                {/* Cuisine */}
                {/* <td className="px-6 py-4 text-slate-300">
                  {recipe.cuisineType}
                </td> */}

                {/* Likes */}
                <td className="px-6 py-4">
                  <span className="flex items-center gap-1 text-red-400">
                    <Heart size={14} fill="currentColor" />
                    {recipe.like}
                  </span>
                </td>

                {/* Featured */}
                <td className="px-6 py-4">
                  {recipe.featured ? (
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      ✨ Featured
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                      Regular
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                      <AdminFeature recipe={recipe} featured={recipe.featured}></AdminFeature>                      

                    <AdminDeleteReciepe recipe={recipe}></AdminDeleteReciepe>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRecipe;