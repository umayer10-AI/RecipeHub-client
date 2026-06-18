import Link from "next/link";
import { ChefHat, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1120] px-4 text-white">
      <div className="text-center">
        
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-slate-800 p-5">
            <ChefHat className="h-12 w-12 text-cyan-400" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold">
          Recipe Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-gray-400">
          Oops! The page you are looking for does not exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;