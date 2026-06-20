import React from "react";
import ReportDelete from "./ReportDelete";
import ReportRecipeDelete from "./ReportRecipeDelete";


const ReportsList = ({reports}) => {
  return (
    <div className="">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              Recipe Reports 🚨
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {reports.length} pending reports
            </p>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-700 text-sm">
              Pending
            </button>
            <button className="px-4 py-2 rounded-full border text-sm">
              Dismissed
            </button>
            <button className="px-4 py-2 rounded-full border text-sm">
              All
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr className="text-left">
                <th className="px-6 py-4">Recipe ID</th>
                <th className="px-6 py-4">Recipe Title</th>
                <th className="px-6 py-4">Reason</th>
                <th className="px-6 py-4">Reported</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr
                  key={report._id}
                  className="border-t border-slate-200 dark:border-slate-800"
                >
                  <td className="px-6 py-4 font-mono">
                    {report.recipeId.slice(0, 8)}...
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {report.recipeTitle}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-500 border-orange-200">
                      {report.reason}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {/* <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-600 cursor-pointer hover:bg-black hover:text-white transition">
                        Remove Recipe
                      </button> */}
                      <ReportRecipeDelete report={report}></ReportRecipeDelete>

                      {/* <button className="px-4 py-2 rounded-lg border bg-white text-black font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                        Dismiss
                      </button> */}
                      <ReportDelete report={report}></ReportDelete>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ReportsList;