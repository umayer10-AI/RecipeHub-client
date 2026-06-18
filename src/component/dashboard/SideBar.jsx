"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  BookOpen,
  Heart,
  ShoppingBag,
  User,
  ArrowLeft,
  LogOut,
  Crown,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  let menuItems = [];
  if(user?.role === 'customer'){
    menuItems = [
    {
      name: "Overview",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      name: "Add Recipe",
      href: "/dashboard/customer/add-recipe",
      icon: PlusCircle,
    },
    {
      name: "My Recipes",
      href: "/dashboard/customer/my-recipes",
      icon: BookOpen,
    },
    {
      name: "Favourite",
      href: "/dashboard/customer/favourite",
      icon: Heart,
    },
    {
      name: "Purchased",
      href: "/dashboard/customer/purchased",
      icon: ShoppingBag,
    },
    {
      name: "Profile",
      href: "/dashboard/customer/profile",
      icon: User,
    },
  ];
  }
  if(user?.role === 'admin'){
    menuItems = [
    {
      name: "Overview",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Add Recipe",
      href: "/dashboard/admin/add-recipe",
      icon: PlusCircle,
    },
    {
      name: "My Recipes",
      href: "/dashboard/admin/my-recipes",
      icon: BookOpen,
    },
    {
      name: "Favourite",
      href: "/dashboard/admin/favourite",
      icon: Heart,
    },
    {
      name: "Purchased",
      href: "/dashboard/admin/purchased",
      icon: ShoppingBag,
    },
    {
      name: "Profile",
      href: "/dashboard/admin/profile",
      icon: User,
    },
  ];
  }

  const handleSignout = async () => {
      await authClient.signOut()
      redirect('/')
    }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-[#0F172A] text-white">
      
      {/* User Info */}
      <div className="border-b border-white/10 p-6">
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            alt="logo"
            src={
              user?.image ?
              user?.image :
              "https://images.unsplash.com/photo-1781124771441-a66d8864724b"
            }
            className="h-20 w-20 rounded-full object-cover border-2 border-slate-700"
          />

          {/* Name + Badge */}
          <div className="mt-3 flex items-center gap-2">
            <h2 className="text-lg font-semibold">
              {user?.name || "John Doe"}
            </h2>

            {user?.plan === "pro" ? (
              <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
                <Crown size={10} />
                Premium
              </span>
            ) : (
              <span className="rounded-full border border-cyan-500/50 bg-cyan-500/30 px-2 py-0.5 text-xs font-medium text-cyan-400">
                Free
              </span>
            )}
          </div>

          <p className="text-sm text-gray-400">
            {user?.email || "john@example.com"}
          </p>
        </div>
      </div>

      {/* Routes */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-2 transition ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white"
                    : "text-gray-300 hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Buttons */}
      <div className="border-t border-white/10 p-4">
        <div className="space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-slate-800"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <button onClick={handleSignout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;