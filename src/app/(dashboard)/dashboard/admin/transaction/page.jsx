import { getAllPayments } from "@/lib/api/customer/payment";
import React from "react";

const Page = async () => {

  const data = await getAllPayments()
  console.log(data)

  return (
    <div className="max-w-[90%] mx-auto py-10">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-3xl font-bold text-white">
      Payment History
    </h2>

    <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
      Total Payments: {data?.length}
    </div>
  </div>

  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-950">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              User
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Amount
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Recipe
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Date
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Transaction ID
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.map((payment) => (
            <tr
              key={payment._id}
              className="border-b border-slate-800 hover:bg-slate-800/50 transition"
            >
              <td className="px-6 py-4 text-slate-300">
                {payment.userEmail}
              </td>

              <td className="px-6 py-4">
                <span className="font-semibold text-cyan-400">
                  ${payment.price}
                </span>
              </td>

              <td className="px-6 py-4 text-white font-medium">
                {payment.recipeName}
              </td>

              <td className="px-6 py-4 text-slate-400">
                {new Date(payment.paidAt).toLocaleDateString()}
              </td>

              <td className="px-6 py-4">
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Paid
                </span>
              </td>

              <td className="px-6 py-4">
                <code className="rounded bg-slate-800 px-2 py-1 text-xs text-cyan-400">
                  {payment.sessionId.slice(0, 18)}...
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {data?.length === 0 && (
    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 py-16 text-center">
      <p className="text-slate-400">
        No payment history found.
      </p>
    </div>
  )}
</div>
  );
};

export default Page;