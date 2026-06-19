import React from "react";
import { Shield, User, Crown, CheckCircle, CircleOff, LoaderPinwheel } from "lucide-react";
import StatesChange from "./StatesChange";

const AdminManageUser = ({users}) => {

    // console.log(users)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Manage Users 👥
        </h1>
        <p className="text-slate-400 mt-1">
          Block/unblock users and manage roles
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
        <table className="w-full">
          <thead className="border-b border-slate-800">
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Plan</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-slate-800 hover:bg-slate-800/50 transition"
              >
                {/* User */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-medium text-white">
                        {user.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-purple-500/10 text-purple-400"
                        : "bg-orange-500/10 text-orange-400"
                    }`}
                  >
                    {user.role === "admin" ? (
                      <Shield size={14} />
                    ) : (
                      <User size={14} />
                    )}
                    {user.role}
                  </span>
                </td>

                {/* Plan */}
                <td className="px-6 py-4">
                  {user.plan === "pro" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                      <Crown size={14} />
                      Premium
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-cyan-500">
                      <LoaderPinwheel size={13}/>
                      Free
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                    {user.isBlock ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                        <CircleOff size={13} />
                        Blocked
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                        <CheckCircle size={14} />
                        Active
                        </span>
                    )}
                </td>

                {/* Joined */}
                <td className="px-6 py-4 text-slate-400">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                {/* Actions */}
                <StatesChange user={user}></StatesChange>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageUser;