import Link from "next/link";
import { Clock, ChefHat } from "lucide-react";
import Image from "next/image";

// const recipes = [
//   {
//     recipeName: "Tobias Head",
//     image: "https://i.ibb.co/p62vF79p/download-3.jpg",
//     category: "Breakfast",
//     cuisineType: "Chinese",
//     difficultyLevel: "Easy",
//     preparationTime: "40",
//     ingredients: "Mollitia id omnis im",
//     instructions: "Consequat Sint iste",
//     userId: "6a32b24e9189754466e9d54f",
//     userName: "Umayer",
//   },
// ];

export default function RecipeCards({recipes}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg hover:border-orange-500/50 hover:shadow-orange-500/10 transition-all duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-50">
            <Image
                src={recipe?.image ? recipe?.image : 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'}
                // src={'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'}
                alt={recipe?.recipeName}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
            />

            <span className="absolute top-4 left-4 bg-linear-to-r from-cyan-500 to-blue-700 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                {recipe.category}
            </span>
            </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-white">
                {recipe.recipeName}
              </h2>

              <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                {recipe.cuisineType}
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-2">
              Created by{" "}
              <span className="text-orange-400 font-medium">
                {recipe.userName}
              </span>
            </p>

            <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
              <div className="flex items-center gap-2">
                <ChefHat size={16} />
                <span>{recipe.difficultyLevel}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{recipe.preparationTime} min</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm line-clamp-2 mb-5">
              {recipe.ingredients}
            </p>

            <Link href={`/browse/${recipe._id}`}>
              <button className="w-full rounded-xl cursor-pointer bg-linear-to-r from-cyan-500 to-blue-700 px-4 py-2 font-semibold text-white transition hover:bg-orange-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}