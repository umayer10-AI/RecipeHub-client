"use client";

import { updateRecipe } from "@/lib/api/customer/recipe";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EditRecipe({ recipe }) {
  const [open, setOpen] = useState(false);
//   console.log(recipe)

  const [formData, setFormData] = useState({
    recipeName: recipe.recipeName || "",
    image: recipe.image || "",
    category: recipe.category || "",
    cuisineType: recipe.cuisineType || "",
    difficultyLevel: recipe.difficultyLevel || "",
    preparationTime: recipe.preparationTime || "",
    ingredients: recipe.ingredients || "",
    instructions: recipe.instructions || "",
    userId: recipe.userId || "",
    userName: recipe.userName || "",
    like: recipe.like || 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    const result = await updateRecipe(formData,recipe._id)
    // console.log(result)
    if(result.modifiedCount > 0){
        toast.success('Updated Data')
        setOpen(false);
        redirect('/dashboard/customer/my-recipes')
    }

    setOpen(false);
  };

  return (
    <div>
      {/* Edit Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-black hover:bg-yellow-600"
      >
        Edit
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-2xl bg-[#162033] p-6 rounded-2xl border border-slate-700 max-h-[90vh] overflow-y-auto">

            <h2 className="text-xl font-bold text-white mb-4">
              Edit Recipe
            </h2>

            {/* FORM START */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* IMAGE */}
                <div>
                  <label className="text-sm text-slate-300">Image URL</label>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* NAME */}
                <div>
                  <label className="text-sm text-slate-300">Recipe Name</label>
                  <input
                    name="recipeName"
                    value={formData.recipeName}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* CATEGORY */}
                <div>
                  <label className="text-sm text-slate-300">Category</label>
                  <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* CUISINE */}
                <div>
                  <label className="text-sm text-slate-300">Cuisine Type</label>
                  <input
                    name="cuisineType"
                    value={formData.cuisineType}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* DIFFICULTY */}
                <div>
                  <label className="text-sm text-slate-300">Difficulty Level</label>
                  <input
                    name="difficultyLevel"
                    value={formData.difficultyLevel}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* TIME */}
                <div>
                  <label className="text-sm text-slate-300">Preparation Time</label>
                  <input
                    name="preparationTime"
                    value={formData.preparationTime}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* LIKES */}
                <div>
                  <label className="text-sm text-slate-300">Likes</label>
                  <input
                    name="like"
                    type="number"
                    value={formData.like}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* USER NAME */}
                <div>
                  <label className="text-sm text-slate-300">User Name</label>
                  <input
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* INGREDIENTS */}
                <div className="lg:col-span-2">
                  <label className="text-sm text-slate-300">Ingredients</label>
                  <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                {/* INSTRUCTIONS */}
                <div className="lg:col-span-2">
                  <label className="text-sm text-slate-300">Instructions</label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-2 mt-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm bg-slate-700 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-3 py-2 text-sm bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-600"
                >
                  Save
                </button>
              </div>
            </form>
            {/* FORM END */}

          </div>
        </div>
      )}
    </div>
  );
}