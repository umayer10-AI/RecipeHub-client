"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const logindata = Object.fromEntries(formData.entries());

    console.log(logindata);

    const { data, error } = await authClient.signIn.email({
            email: logindata.email,
            password: logindata.password,
            rememberMe: true,
            callbackURL: "/",
        });
    
        if(data){
            toast.success('Login Successfully',
                {
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
        }
        else{
            toast.error(`${error.message}`,
                {
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
        }
    
  };

    const handleGoogle = async() => {
      const data = await authClient.signIn.social({
          provider: "google",
      });
    }

  return (
    <div className="flex items-center pt-10 pb-20 justify-center bg-[#0B1120] text-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
            required
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 py-3 font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Google Login */}
        <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-xl border border-gray-700 py-2 hover:bg-gray-200 transition">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-sky-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;