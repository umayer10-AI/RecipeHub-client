import { saveRecipeData } from '@/lib/api/customer/recipe';
import { error } from 'better-auth/api';
import { Bookmark } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaBookmark } from 'react-icons/fa';

const SaveRecipe = ({recipe,filter}) => {

    // console.log(recipe)
    const {
        _id,
        recipeName,
        image,
        category,
        cuisineType,
        difficultyLevel,
        preparationTime,
        ingredients,
        instructions,
        like,
        userId,
        userName,
        createdAt,
    } = recipe;

    const data = {
        recipeName,
        image,
        category,
        cuisineType,
        difficultyLevel,
        preparationTime,
        ingredients,
        instructions,
        like,
        userId,
        userName,
        createdAt,
        saveId: _id,
    }

    const handleData = async () => {
        // console.log(data)
        const saveData = await saveRecipeData(data)
        // console.log(saveData)
        if(saveData.insertedId){
            toast.success('Save Data')
            redirect(`/browse/${recipe._id}`)
        }
        else{
            toast.error('Already Saved Data')
        }
    }

    return (
        <div>
            {
                !filter ? <button onClick={handleData} className="flex items-center cursor-pointer gap-1.5 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium">
                <Bookmark size={16} />
                Save
                </button>
                : <button onClick={handleData} className="flex items-center cursor-pointer gap-1.5 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-sm font-medium">
                <FaBookmark size={16} />
                Saved
                </button>
            }
        </div>
    );
};

export default SaveRecipe;