'use client'
import { addFeature } from '@/lib/api/admin/users';
import { Star } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const AdminFeature = ({recipe}) => {

    const a = async() => {
        const info = await addFeature(recipe)
        if(info.insertedId){
            toast.success('Feature Added')
        }
    }

    return (
        <span onClick={a} className="flex items-center gap-1 py-2 px-3 text-sm rounded-lg bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20">
            <Star size={14} />
            Feature
        </span>
    );
};

export default AdminFeature;