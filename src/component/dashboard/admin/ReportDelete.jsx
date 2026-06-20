'use client'
import { deleteReportButton } from '@/lib/api/admin/users';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const ReportDelete = ({report}) => {

    const a = async() => {
        const data = await deleteReportButton(report._id)
        if(data.deletedCount > 0){
            toast.success('Dismiss')
            redirect('/dashboard/admin/reports')
        }
    }

    return (
        <div>
            <button onClick={a} className="px-4 py-2 rounded-lg border bg-white text-black font-semibold hover:bg-red-500 dark:hover:bg-red-500 transition hover:text-white">
                Dismiss
            </button>
        </div>
    );
};

export default ReportDelete;