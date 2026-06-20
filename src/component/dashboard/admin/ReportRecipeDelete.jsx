'use client'
import { deleteReportButton, deleteReportRecipeButton } from '@/lib/api/admin/users';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const ReportRecipeDelete = ({report}) => {

    // console.log(report)
    const a = async() => {
        await deleteReportButton(report._id)
        const data = await deleteReportRecipeButton(report.recipeId)
        if(data.deletedCount > 0){
            toast.success('Dismiss')
            redirect('/dashboard/admin/reports')
        }
    }

    return (
        <div>
            <button onClick={a}
            className="px-4 py-2 rounded-lg bg-red-500/20 text-red-600 cursor-pointer hover:bg-black hover:text-white transition">
                Remove Recipe
            </button>
        </div>
    );
};

export default ReportRecipeDelete;