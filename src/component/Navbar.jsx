"use client";

import Link from "next/link";
import { Avatar } from "@heroui/react";
import { ChefHat, LayoutDashboard, LogOut, User } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {data: session} = authClient.useSession()
  const user = session?.user
  // console.log(user)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignout = async () => {
    await authClient.signOut()
    redirect('/')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[80%] items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ChefHat className="h-7 w-7 text-sky-400" />
          <span className="text-xl font-bold text-white">
            RecipeHub
          </span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={`rounded-xl px-4 py-2 ${
              pathname === "/"
                ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white"
                : "text-gray-300 hover:text-sky-400"
            }`}
          >
            Home
          </Link>

          <Link
            href="/browse"
            className={`rounded-xl px-4 py-2 ${
              pathname === "/browse"
                ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white"
                : "text-gray-300 hover:text-sky-400"
            }`}
          >
            Browse
          </Link>

          <Link
            href="/about"
            className={`rounded-xl px-4 py-1 ${
              pathname === "/about"
                ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white"
                : "text-gray-300 hover:text-sky-400"
            }`}
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {
            !user && <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-2 text-white"
          >
            Login
          </Link>
          }

          {/* Custom Dropdown */}
          {
            user && <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer border-2 border-blue-500 py-1 px-3 rounded-full hover:bg-gray-800 transition"
            >
              <Avatar size="sm">
                <Avatar.Image 

                className="h-8 w-8 rounded-full" 
                referrerPolicy="no-referrer"
                alt="John Doe" 
                src={user?.image ? user?.image : "https://images.unsplash.com/photo-1781124771441-a66d8864724b"} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
            <span className="hidden md:block text-white font-medium">
              {user?.name? user?.name.split(' ')[0] : "Jhon Doe"}
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
    href={`/dashboard/customer/profile`}
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
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;