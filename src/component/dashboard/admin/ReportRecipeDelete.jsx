'use client'
import { deleteReportButton, deleteReportRecipeButton } from '@/lib/api/admin/users';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const ReportRecipeDelete = ({report}) => {

    const a = async() => {

        const token = await authClient.token()
        const t = token?.data

        await deleteReportButton(report._id,t)
        const data = await deleteReportRecipeButton(report.recipeId,t)
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