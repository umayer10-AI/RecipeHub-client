"use client";

import React, { useEffect, useState } from "react";
import { Flag, X } from "lucide-react";
import toast from "react-hot-toast";
import { reportRecipe, getReportStatus } from "@/lib/api/customer/recipe";
import { authClient } from "@/lib/auth-client";

const ReportModal = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [reported, setReported] = useState(false);

  const { data: session } = authClient.useSession();

  const reportReasons = [
    "Spam or misleading content",
    "Inappropriate or offensive content",
    "Copyright violation",
  ];

  // 🔥 load report status from DB
  useEffect(() => {
    const fetchStatus = async () => {
      if (!session?.user?.id) return;

      const res = await getReportStatus(
        recipe._id,
        session.user.id
      );

      setReported(res.isReported);
    };

    fetchStatus();
  }, [session, recipe._id]);

  const handleReport = async () => {
    if (reported) {
      toast.error("Already reported");
      return;
    }

    const reportData = {
      recipeId: recipe._id,
      recipeTitle: recipe.recipeName,
      recipeOwner: recipe.userId,
      reportedBy: session?.user?.id,
      reportedByName: session?.user?.name,
      reason,
    };

    const result = await reportRecipe(reportData);

    if (result.insertedId) {
      toast.success("Recipe reported successfully");
      setReported(true);
      setReason("");
      setIsOpen(false);
    } else if (result.alreadyReported) {
      toast.error("Already reported");
      setReported(true);
    }
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => !reported && setIsOpen(true)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-white transition ${
          reported
            ? "bg-slate-600 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        <Flag size={16} />
        {reported ? "Reported" : "Report"}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Report Recipe
                </h2>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
              {reportReasons.map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${
                    reason === item
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    value={item}
                    checked={reason === item}
                    onChange={(e) => setReason(e.target.value)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-5 pt-0">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={handleReport}
                disabled={!reason || reported}
                className="flex-1 py-2 rounded-lg bg-red-500 text-white disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportModal;