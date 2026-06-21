"use client"
import { updatePremium } from '@/lib/api/admin/users';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const StatesChange = ({user}) => {

    // console.log(user)

    const handleBlockToggle = async (id) => {
        const token = await authClient.token()
        const t = token?.data
            const data = await updatePremium(id,t)

            if(data.modifiedCount > 0) {
                toast.success('State Change')
                redirect('/dashboard/admin/manage-user')
            }
        };
    
    return (
            <td className="px-6 py-4">
                    <button onClick={() => handleBlockToggle(user._id)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium ${
                        user.isBlock
                            ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                            : "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        }`}
                    >
                        {user.isBlock ? "Active" : "Block"}
                    </button>
                </td>
    );
};

export default StatesChange;