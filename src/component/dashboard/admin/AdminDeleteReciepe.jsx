"use client"
import { adminDeleteRecipeItem } from '@/lib/api/admin/users';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AdminDeleteReciepe = ({recipe}) => {

    const a = async() => {

        const token = await authClient.token()
        const t = token?.data

        const info = await adminDeleteRecipeItem(recipe._id, t)
        // console.log(info)
        if(info.deletedCount > 0){
            toast.error("Recipe Deleted")
            redirect('/dashboard/admin/manage-recipe')
        }
    }

    return (
        <div>
            <button onClick={a} className="rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20">
                Delete
            </button>
        </div>
    );
};

export default AdminDeleteReciepe;