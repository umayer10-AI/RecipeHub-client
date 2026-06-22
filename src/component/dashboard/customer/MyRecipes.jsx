import Link from "next/link";
import EditRecipe from "./EditModal";
import DeleteRecipe from "./DeleteRecipe";

export default function MyRecipes({ recipes }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900">
      <table className="w-full text-left">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-white">
              Recipe
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-white">
              Category
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-white">
              Status
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-white">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {recipes?.map((recipe) => (
            <tr
              key={recipe._id}
              className="border-t border-slate-700 hover:bg-slate-800/50"
            >
              {/* Recipe */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src={recipe.image}
                    alt={recipe.recipeName}
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="font-medium text-white">
                      {recipe.recipeName}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {new Date(recipe.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </td>

              {/* Category */}
              <td className="px-6 py-4">
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                  {recipe.category}
                </span>
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    recipe.status === "Published"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : recipe.status === "Pending"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-slate-500/10 text-slate-300"
                  }`}
                >
                  {recipe.status || "Regular"}
                </span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  <Link href={`/browse/${recipe?._id}`} className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white transition hover:bg-blue-600">
                    View
                  </Link>

                  <EditRecipe recipe={recipe}></EditRecipe>

                  <DeleteRecipe recipe={recipe}></DeleteRecipe>
                </div>
              </td>
            </tr>
          ))}

          {recipes?.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="px-6 py-10 text-center text-slate-400"
              >
                No recipes found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

