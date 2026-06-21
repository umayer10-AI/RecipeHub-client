import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120] text-gray-300">
      <div className="mx-auto max-w-[80%] px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-sky-400" />
              <h2 className="text-2xl font-bold text-white">
                RecipeHub
              </h2>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Discover, share, and explore delicious recipes from around
              the world. Cook smarter with RecipeHub.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-sky-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/browse" className="hover:text-sky-400 transition">
                  Browse Recipes
                </Link>
              </li>

              <li>
                <Link href="/pricing" className="hover:text-sky-400 transition">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-sky-400 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Social Links
            </h3>

            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="hover:text-sky-400 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="hover:text-sky-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-sky-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MdEmail className="text-sky-400 text-xl" />
                <span>support@recipehub.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MdPhone className="text-sky-400 text-xl" />
                <span>+880 1234-567890</span>
              </div>

              <p className="text-sm text-gray-400">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RecipeHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;