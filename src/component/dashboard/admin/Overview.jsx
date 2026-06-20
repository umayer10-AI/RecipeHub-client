import React from "react";
import {
  Users,
  BookOpen,
  Crown,
  AlertTriangle,
  CreditCard,
  UserCog,
} from "lucide-react";


const actions = [
  {
    name: "Manage Users",
    icon: UserCog,
  },
  {
    name: "Manage Recipes",
    icon: BookOpen,
  },
  {
    name: "Review Reports",
    icon: AlertTriangle,
  },
  {
    name: "Transactions",
    icon: CreditCard,
  },
];

const Overview = ({userCnt,recipeCnt,premiumCnt,list}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          Admin Overview 🛡️
        </h1>
        <p className="text-slate-400 mt-1">
          Platform statistics and management
        </p>
      </div>

      {/* Stats Cards */}
      {/* Stats Cards */}
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

  {/* Total Users */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg hover:border-slate-700 transition-all">
    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
      <Users className="w-7 h-7 text-blue-400" />
    </div>

    <h2 className="text-4xl font-bold mt-5 text-blue-400">
      {userCnt.length}
    </h2>

    <p className="text-slate-400 mt-2">Total Users</p>
  </div>

  {/* Total Recipes */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg hover:border-slate-700 transition-all">
    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
      <BookOpen className="w-7 h-7 text-orange-400" />
    </div>

    <h2 className="text-4xl font-bold mt-5 text-orange-400">
      {recipeCnt.length}
    </h2>

    <p className="text-slate-400 mt-2">Total Recipes</p>
  </div>

  {/* Premium Members */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg hover:border-slate-700 transition-all">
    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
      <Crown className="w-7 h-7 text-purple-400" />
    </div>

    <h2 className="text-4xl font-bold mt-5 text-purple-400">
      {premiumCnt.length}
    </h2>

    <p className="text-slate-400 mt-2">Premium Members</p>
  </div>

  {/* Pending Reports */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg hover:border-slate-700 transition-all">
    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
      <AlertTriangle className="w-7 h-7 text-red-400" />
    </div>

    <h2 className="text-4xl font-bold mt-5 text-red-400">
      {list.length}
    </h2>

    <p className="text-slate-400 mt-2">Pending Reports</p>
  </div>

</div>
      {/* Quick Actions */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white mb-5">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.name}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-slate-700 hover:text-white"
              >
                <Icon size={18} />
                {action.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;