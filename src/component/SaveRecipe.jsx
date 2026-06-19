import { saveRecipeData } from '@/lib/api/customer/recipe';
import { authClient } from '@/lib/auth-client';
import { error } from 'better-auth/api';
import { Bookmark } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaBookmark } from 'react-icons/fa';

const SaveRecipe = ({recipe,isSaved}) => {

    const { data: session } = authClient.useSession();

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
        savedBy: session?.user?.id,
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
  isSaved ? (
    <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-500">
      <FaBookmark size={16} />
      Saved
    </button>
  ) : (
    <button
      onClick={handleData}
      className="flex items-center gap-1.5 cursor-pointer px-3 py-2 rounded-lg bg-blue-500"
    >
      <Bookmark size={16} />
      Save
    </button>
  )
}
        </div>
    );
};

export default SaveRecipe;