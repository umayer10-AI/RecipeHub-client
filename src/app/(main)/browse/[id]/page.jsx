import RecipeDetails from '@/component/RecipeDetails';
import { singleRecipes, singleSavedRecipes } from '@/lib/api/customer/recipe';
import { serverSession } from '@/lib/session';
import { getServerToken } from '@/lib/token';
import React from 'react';

const page = async ({params}) => {

    const user = await serverSession()
    const token = await getServerToken()

    const {id} = await params
    const data = await singleRecipes(id)
    const save = await singleSavedRecipes(user?.id, token)
    const isSaved = save.find(item => item.saveId === data._id)

    return (
        <div>
            <RecipeDetails recipe={data} isSaved={isSaved}></RecipeDetails>
        </div>
    );
};

export default page;