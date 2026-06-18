"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    const registerData = Object.fromEntries(formData.entries());

    console.log(registerData);

    const { data, error } = await authClient.signUp.email({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        image: registerData.image,
        role: registerData.role,
        plan: 'free',
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
            redirect('/')
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
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            name="name"
            placeholder="Full Name"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
          />

          {/* Image */}
          <input
            name="image"
            placeholder="Profile Image URL"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
          />

          {/* Role */}
          <select
            name="role"
            defaultValue="customer"
            className="w-full rounded-xl bg-[#0B1120] border border-gray-700 px-4 py-3 outline-none focus:border-sky-500"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 py-3 font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-3 my-3">
            <div className="h-px flex-1 bg-gray-700" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* Google Button */}
        <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-xl border border-gray-700 py-2 hover:bg-gray-800 transition">
          <h2 className="text-xl"><FcGoogle /></h2>Continue with Google
        </button>

        {/* Login */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-sky-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;