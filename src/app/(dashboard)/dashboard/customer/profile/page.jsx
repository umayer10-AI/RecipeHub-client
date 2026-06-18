"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Crown, Rocket, User, ImageIcon } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const updatedUser = {
      name: formData.get("name"),
      image: formData.get("image"),
    };

    try {
      await authClient.updateUser({
        name: updatedUser.name,
        image: updatedUser.image,
      });

      router.push("/dashboard/customer/profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-10">
            <h1 className="text-center text-3xl font-bold text-white">
              Edit Profile
            </h1>

            <p className="mt-2 text-center text-slate-100">
              Update your profile information
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 p-8">
            {/* Profile Preview */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={user?.image}
                  alt={user?.name}
                  className="h-32 w-32 rounded-full border-4 border-cyan-500 object-cover shadow-xl"
                />

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  {user?.plan === "pro" ? (
                    <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                      <Crown size={14} />
                      PREMIUM
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold text-cyan-300">
                      <Rocket size={14} />
                      FREE
                    </span>
                  )}
                </div>
              </div>

              <h2 className="mt-6 text-xl font-semibold text-white">
                {user?.name}
              </h2>

              <p className="text-sm text-slate-400">
                {user?.email}
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <User size={16} />
                Full Name
              </label>

              <input
                type="text"
                name="name"
                defaultValue={user?.name}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <ImageIcon size={16} />
                Profile Image URL
              </label>

              <input
                type="text"
                name="image"
                defaultValue={user?.image}
                placeholder="Enter image URL"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;