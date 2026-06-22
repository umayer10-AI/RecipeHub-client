"use client";

import Link from "next/link";
import { Avatar } from "@heroui/react";
import {
  ChefHat,
  LayoutDashboard,
  LogOut,
  User,
  Sun,
  Moon,
} from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const dropdownRef = useRef(null);
  const { theme, setTheme } = useTheme();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const a = () => {
    setDarkMode(!darkMode)
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleSignout = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120] dark:bg-[#0B1120]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[80%] items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ChefHat className="h-7 w-7 text-sky-400" />
          <span className="text-xl font-bold text-white">RecipeHub</span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={`rounded-xl px-4 py-2 ${
              pathname === "/"
                ? "bg-linear-to-r from-cyan-500 to-blue-700 text-white"
                : "text-white hover:text-sky-400"
            }`}
          >
            Home
          </Link>

          <Link
            href="/browse"
            className={`rounded-xl px-4 py-2 ${
              pathname === "/browse"
                ? "bg-linear-to-r from-cyan-500 to-blue-700 text-white"
                : "text-white hover:text-sky-400"
            }`}
          >
            Browse
          </Link>

          <Link
            href="/about"
            className={`rounded-xl px-4 py-2 ${
              pathname === "/about"
                ? "bg-linear-to-r from-cyan-500 to-blue-700 text-white"
                : "text-white hover:text-sky-400"
            }`}
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={a}
            className="flex h-8 w-8 items-center justify-center cursor-pointer rounded-full bg-slate-800 text-cyan-400 hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={20} />}
          </button>

          {!user && (
            <Link
              href="/login"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-2 text-white"
            >
              Login
            </Link>
          )}

          {user && (
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer border-2 border-blue-500 py-1 px-3 rounded-full hover:bg-gray-800 transition text-white"
              >
                <Avatar size="sm">
                  <Avatar.Image
                    className="h-8 w-8 rounded-full"
                    referrerPolicy="no-referrer"
                    alt="User"
                    src={
                      user?.image
                        ? user.image
                        : "https://images.unsplash.com/photo-1781124771441-a66d8864724b"
                    }
                  />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <span className="hidden md:block text-white font-medium">
                  {user?.name ? user.name.split(" ")[0] : "John"}
                </span>

                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {open && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-700 bg-[#111827] shadow-xl overflow-hidden">
                  <Link
                    href={`/dashboard/${user?.role}`}
                    className="flex items-center gap-2 px-4 py-3 text-white hover:bg-gray-800"
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>

                  <Link
                    href="/dashboard/customer/profile"
                    className="flex items-center gap-2 px-4 py-3 text-white hover:bg-gray-800"
                  >
                    <User size={18} />
                    Profile
                  </Link>

                  <button
                    className="w-full flex items-center gap-2 text-left px-4 py-3 text-red-400 hover:bg-gray-800"
                    onClick={handleSignout}
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;