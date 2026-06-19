import { singleCountRecipes } from '@/lib/api/customer/recipe';
import { Heart } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const LikeGrow = ({recipe}) => {

    const a = async() => {
        console.log("hello")
        const likeCnt = await singleCountRecipes(recipe,recipe._id)
        console.log(likeCnt)
        if(likeCnt.modifiedCount > 0){
            toast.success("liked")
            redirect(`/browse/${recipe._id}`)
        }
    }

    return (
        <div>
            <button onClick={a} className="flex cursor-pointer items-center gap-1.5 px-3 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 transition text-sm font-medium">
              <Heart size={16} />
              Like ({recipe.like})
            </button>
        </div>
    );
};

export default LikeGrow;