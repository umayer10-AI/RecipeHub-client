// 'use client'
import React from 'react';

const Dashboard = () => {
  return (
    // dark:bg-slate-950 এবং dark:text-white দিয়ে ডার্ক মোড হ্যান্ডেল করা হয়েছে
    <div className="min-h-screen p-8 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, Abc. Here is your command center.</p>
        </div>
        <form action="/api/subscription" method="POST">
  <button
    type="submit"
    className="px-4 py-2 text-sm cursor-pointer text-white font-bold bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg"
  >
    Upgrade to Pro →
  </button>
</form>
      </div>

      {/* Stats Cards */}.
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Published Recipes", count: 1 },
          { title: "Saved Favorites", count: 2 },
          { title: "Total Engagement", count: 0 },
        ].map((card, idx) => (
          <div key={idx} className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
            <h3 className="text-sm text-slate-500 dark:text-slate-400 mb-2">{card.title}</h3>
            <p className="text-4xl font-bold mb-4">{card.count}</p>
            <a href="#" className="text-sm hover:underline">View details →</a>
          </div>
        ))}
      </div>

      {/* Storage Limit */}
      <div className="flex justify-between items-center p-6 border border-slate-200 dark:border-slate-800 rounded-xl mb-8 bg-slate-50 dark:bg-slate-900">
        <p>● Storage Limit: 1/2 Recipes <span className="text-slate-500 text-sm ml-2">Basic accounts are limited to 2 recipes. Upgrade to unlock unlimited storage.</span></p>
        <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg font-medium">Upgrade Account</button>
      </div>

      {/* Quick Actions */}
      <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900">
        <h2 className="font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg">Create new recipe</button>
          {['Browse gallery', 'View saved items', 'Account settings'].map(btn => (
            <button key={btn} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              {btn}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;