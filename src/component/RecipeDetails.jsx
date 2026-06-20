"use client";

import Image from "next/image";
import {
  Heart,
  Bookmark,
  ShoppingCart,
  Flag,
  Clock,
  ChefHat,
} from "lucide-react";
import SaveRecipe from "./SaveRecipe";
import ReportModal from "./ReportModal";
import LikeGrow from "./LikeGrow";

const RecipeDetails = ({ recipe,isSaved }) => {

    // console.log(recipe)

  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Recipe Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 border border-slate-700">
          <Image
            src={recipe?.image || 'https://i.ibb.co/WNtmYw6n/download-2.jpg'}
            // src={'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'}
            alt={recipe?.recipeName}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
        </div>

        {/* Title & Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {recipe.recipeName}
            </h1>

            <p className="text-slate-400">
              Created by{" "}
              <span className="text-orange-400 font-medium">
                {recipe.userName}
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {/* <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 transition text-sm font-medium">
              <Heart size={16} />
              Like ({recipe.like})
            </button> */}

            <LikeGrow recipe={recipe}></LikeGrow>

            {/* <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium">
              <Bookmark size={16} />
              Save
            </button> */}

            <SaveRecipe recipe={recipe} isSaved={isSaved}></SaveRecipe>

            <form action={'/api/payment'} method="POST">
              <input type="hidden" name="userId" value={recipe?.userId} />
              <input type="hidden" name="recipeId" value={recipe?._id} />
              <input type="hidden" name="price" value={4.99} />
              <input type="hidden" name="recipeName" value={recipe.recipeName} />

              <button type="submit" className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition text-sm font-medium">
                <ShoppingCart size={16} />
                Purchase
              </button>
            </form>

            <ReportModal recipe={recipe}></ReportModal>
          </div>
        </div>

        {/* Recipe Info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#162033] border border-slate-700 rounded-xl p-4">
            <p className="text-slate-400 text-sm mb-1">Category</p>
            <p className="font-semibold">{recipe.category}</p>
          </div>

          <div className="bg-[#162033] border border-slate-700 rounded-xl p-4">
            <p className="text-slate-400 text-sm mb-1">Cuisine</p>
            <p className="font-semibold">{recipe.cuisineType}</p>
          </div>

          <div className="bg-[#162033] border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <ChefHat size={18} className="text-cyan-400" />
              <div>
                <p className="text-slate-400 text-sm">Difficulty</p>
                <p className="font-semibold">
                  {recipe.difficultyLevel}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#162033] border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-cyan-400" />
              <div>
                <p className="text-slate-400 text-sm">Prep Time</p>
                <p className="font-semibold">
                  {recipe.preparationTime} mins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="bg-[#162033] border border-slate-700 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            Ingredients
          </h2>

          <p className="text-slate-300 leading-7">
            {recipe.ingredients}
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-[#162033] border border-slate-700 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            Instructions
          </h2>

          <p className="text-slate-300 leading-7">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;