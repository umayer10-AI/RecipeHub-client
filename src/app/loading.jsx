import { ChefHat } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1120]">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-slate-700"></div>

          <div className="absolute inset-0 h-20 w-20 animate-spin rounded-full border-4 border-transparent border-t-cyan-500 border-r-blue-600"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-cyan-400" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">
            Loading RecipeHub
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Please wait a moment...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;