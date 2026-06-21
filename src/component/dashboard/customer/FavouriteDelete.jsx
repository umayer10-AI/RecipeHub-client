'use client'
import { deleteSaveButton } from '@/lib/api/customer/recipe';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const FavouriteDelete = ({filter}) => {

    const a = async() => {
        const token = await authClient.token()
        const t = token?.data
        const data = await deleteSaveButton(filter, t)
        console.log(data)
        if(data.deletedCount > 0){
            toast.error('Unsave')
            redirect('/dashboard/customer/favourite')
        }
    }
    return (
        <div>
            <button onClick={a}
            className="rounded-lg cursor-pointer bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
    );
};

export default FavouriteDelete;