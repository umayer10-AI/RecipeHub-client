import FavouriteCards from "@/component/dashboard/customer/FavouriteCards";
import { singleSavedRecipes } from "@/lib/api/customer/recipe";
import { serverSession } from "@/lib/session";
import { getServerToken } from "@/lib/token";
import { BookmarkX, Heart } from "lucide-react";
import React from "react";

const page = async () => {
  const token = await getServerToken();

  const user = await serverSession();
  const save = await singleSavedRecipes(user?.id, token);

  return (
    <div className="max-w-[90%] mx-auto py-8">
      {/* Header */}
      <div className="mb-5 rounded-2xl w-[50%] flex justify-center bg-linear-to-b from-blue-700 to-cyan-500 p-4 text-white mx-auto">
        <div className="flex items-center gap-3">
          <Heart className="h-8 w-8 fill-white" />
          <div>
            <h1 className="text-3xl font-bold">Saved Recipes</h1>
            <p className="text-sm text-blue-100 mt-1">
              Your collection of favourite recipes
            </p>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {!save || save.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 py-20 text-center">
          <BookmarkX className="h-16 w-16 text-gray-400" />

          <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            No Saved Recipes Found
          </h2>

          <p className="mt-2 max-w-md text-gray-500">
            You have not saved any recipes yet. Explore recipes and save your
            favourites to see them here.
          </p>
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="mb-6 flex items-center justify-between rounded-xl bg-gray-100 dark:bg-gray-900 p-4">
            <p className="text-gray-600 dark:text-gray-300">
              Total Saved Recipes
            </p>

            <span className="rounded-full bg-blue-600 px-4 py-1 text-white font-semibold">
              {save.length}
            </span>
          </div>

          {/* Recipes */}
          <FavouriteCards recipes={save} />
        </>
      )}
    </div>
  );
};

export default page;