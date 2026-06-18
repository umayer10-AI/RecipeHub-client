"use client";

import { addRecipes } from "@/lib/api/customer/recipe";
import { authClient } from "@/lib/auth-client";
import { uploadToImgbb } from "@/lib/Imgbb";
import { useState } from "react";
import toast from "react-hot-toast";

const AddRecipePage = () => {
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData(e.target);
      const recipeData = Object.fromEntries(formData.entries());

      const imageFile = recipeData.image;
      const imageUrl = await uploadToImgbb(imageFile);

      recipeData.image = imageUrl;
      recipeData.userId = user?.id;

      console.log(recipeData);

      const result = await addRecipes(recipeData)
    //   console.log(result)

      if(result.insertedId){
            toast.success('added recipe',
                {
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
      }

      e.target.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 outline-none focus:border-cyan-500";

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0F172A] p-6 text-white">
        <h1 className="mb-6 text-3xl font-bold">Add New Recipe</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Recipe Name */}
          <div>
            <label className="mb-2 block font-medium">Recipe Name</label>
            <input
              name="recipeName"
              required
              placeholder="e.g. Chicken Biryani"
              className={inputClass}
            />
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block font-medium">Recipe Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className={inputClass}
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block font-medium">Category</label>
            <select name="category" required className={inputClass}>
              <option value="">Select category</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Dessert</option>
              <option>Snack</option>
            </select>
          </div>

          {/* Cuisine */}
          <div>
            <label className="mb-2 block font-medium">Cuisine Type</label>
            <select name="cuisineType" required className={inputClass}>
              <option value="">Select cuisine</option>
              <option>Bangladeshi</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Italian</option>
              <option>Thai</option>
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="mb-2 block font-medium">Difficulty Level</label>
            <select name="difficultyLevel" required className={inputClass}>
              <option value="">Select difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Preparation Time */}
          <div>
            <label className="mb-2 block font-medium">Preparation Time</label>
            <input
              type="number"
              name="preparationTime"
              placeholder="e.g. 30 (minutes)"
              className={inputClass}
            />
          </div>

          {/* Ingredients */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Ingredients</label>
            <textarea
              name="ingredients"
              rows={2}
              placeholder="e.g. Rice, Chicken, Onion, Garlic, Spices..."
              className={inputClass}
            />
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Instructions</label>
            <textarea
              name="instructions"
              rows={2}
              placeholder="Step 1: Wash rice... Step 2: Cook chicken..."
              className={inputClass}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 py-3 font-semibold"
            >
              {loading ? "Uploading..." : "Add Recipe"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddRecipePage;