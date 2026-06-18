"use client";
import { addRecipes } from "@/lib/api/customer/recipe";
import { authClient } from "@/lib/auth-client";
import { uploadToImgbb } from "@/lib/Imgbb";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddRecipePage = () => {
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user)

  const userRecipeCount = 2;

  const isPro = user?.plan === "pro";
  const isBlocked = !isPro && userRecipeCount >= 2;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isBlocked) {
      toast.error("Upgrade to Premium to add more recipes!");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData(e.target);
      const recipeData = Object.fromEntries(formData.entries());

      const imageFile = recipeData.image;
      const imageUrl = await uploadToImgbb(imageFile);

      recipeData.image = imageUrl;
      recipeData.userId = user?.id;
      recipeData.userName = user?.name;

      const result = await addRecipes(recipeData);

      if (result.insertedId) {
        toast.success("Recipe added successfully!");
      }

      e.target.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-[#0B1120] px-4 py-3 outline-none focus:border-cyan-500 text-white";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="mx-auto max-w-5xl">

        {/* BLOCK UI */}
        {isBlocked ? (
          <div className="flex mt-30 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
            
            <div className="text-6xl">👑</div>

            <h1 className="mt-4 text-3xl font-bold text-white">
              Premium Required
            </h1>

            <p className="mt-2 text-slate-300">
              Free users can only add <b>2 recipes</b>.
            </p>

            <form action="/api/subscription" method="POST">
              <button type="submit" className="mt-6 cursor-pointer rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
              🚀 Upgrade to Premium
            </button>
            </form>
          </div>
        ) : (
          
          /* FORM */
          <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-8 text-white backdrop-blur-xl">
            <h1 className="mb-6 text-3xl font-bold">
              Add New Recipe
            </h1>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              {/* Recipe Name */}
              <div>
                <label className="mb-2 block">Recipe Name</label>
                <input name="recipeName" required className={inputClass} />
              </div>

              {/* Image */}
              <div>
                <label className="mb-2 block">Recipe Image</label>
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
                <label className="mb-2 block">Category</label>
                <select name="category" required className={inputClass}>
                  <option value="">Select</option>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                </select>
              </div>

              {/* Cuisine */}
              <div>
                <label className="mb-2 block">Cuisine</label>
                <select name="cuisineType" required className={inputClass}>
                  <option value="">Select</option>
                  <option>Bangladeshi</option>
                  <option>Indian</option>
                  <option>Chinese</option>
                  <option>Thai</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="mb-2 block">Difficulty</label>
                <select name="difficultyLevel" required className={inputClass}>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* Time */}
              <div>
                <label className="mb-2 block">Prep Time</label>
                <input
                  type="number"
                  name="preparationTime"
                  className={inputClass}
                />
              </div>

              {/* Ingredients */}
              <div className="md:col-span-2">
                <label className="mb-2 block">Ingredients</label>
                <textarea name="ingredients" rows={2} className={inputClass} />
              </div>

              {/* Instructions */}
              <div className="md:col-span-2">
                <label className="mb-2 block">Instructions</label>
                <textarea name="instructions" rows={2} className={inputClass} />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold transition hover:scale-[1.02]"
                >
                  {loading ? "Uploading..." : "Add Recipe"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecipePage;