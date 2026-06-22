import { myRecipes, myRecipesCount, singleSavedRecipes } from '@/lib/api/customer/recipe';
import { serverSession } from '@/lib/session';
import { getServerToken } from '@/lib/token';
import Link from 'next/link';
import React from 'react';

const actions = [
  {
    name: "Browse gallery",
    href: "/browse",
  },
  {
    name: "View saved items",
    href: "/dashboard/customer/favourite",
  },
  {
    name: "Account settings",
    href: "/dashboard/customer",
  },
];

const Dashboard = async () => {

    const token = await getServerToken()
    const user = await serverSession()
    const count = await myRecipes(user?.id)
    const saveCnt = await singleSavedRecipes(user?.id,token)
    const likeCnt = await myRecipesCount(user?.id)

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, {user?.name}. Here is your command center.</p>
        </div>
        <form action="/api/subscription" method="POST">
            <button
                type="submit"
                className={user?.plan==='free' ? "px-4 py-2 text-sm cursor-pointer text-white font-bold bg-linear-to-r from-pink-500 to-orange-500 rounded-lg" : "px-4 py-2 text-sm cursor-pointer text-white font-bold bg-linear-to-r from-blue-700 to-cyan-500 rounded-lg"}
            >
                {user?.plan==='free' ? 'Upgrade to Pro →' : '✨Premium'}
            </button>
        </form>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
            <h3 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Published Recipes</h3>
            <p className="text-4xl font-bold mb-4">{count.length || 0}</p>
            <a href="#" className="text-sm hover:underline">View details →</a>
        </div>

        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
            <h3 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Saved Favorites</h3>
            <p className="text-4xl font-bold mb-4">{saveCnt.length || 0}</p>
            <a href="#" className="text-sm hover:underline">View details →</a>
          </div>

        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
            <h3 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Total Engagement</h3>
            <p className="text-4xl font-bold mb-4">{likeCnt || 0}</p>
            <a href="#" className="text-sm hover:underline">View details →</a>
          </div>
      </div>

      

      {
        user?.plan==='free'? 

        <div className="flex justify-between items-center p-6 border border-slate-200 dark:border-slate-800 rounded-xl mb-8 bg-slate-50 dark:bg-slate-900">
            <p>● Storage Limit: {count.length}/2 Recipes <span className="text-slate-500 text-sm ml-2">Basic accounts are limited to 2 recipes. Upgrade to unlock unlimited storage.</span></p>
            <form action="/api/subscription" method="POST">
                <button type='submit' className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg font-medium">Upgrade Account</button>
            </form>
        </div>
        : 
        <div className="flex justify-between items-center p-6 border border-emerald-200 dark:border-emerald-900 rounded-xl mb-8 bg-emerald-50 dark:bg-emerald-950/30">
      
        <p className="text-sm text-emerald-700 dark:text-emerald-200 font-medium">
            ✨ You are on Premium Plan — Unlimited storage unlocked
        </p>

        <div className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium">
            Premium Active
        </div>

        </div>
      }

      {/* Quick Actions */}
      <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
        <h2 className="font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link href={'/dashboard/customer/add-recipe'} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg">Create new recipe</Link>
          {actions.map(btn => (
            <Link href={btn.href} key={btn.name} className="px-4 py-2 border cursor-pointer border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {btn.name}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;