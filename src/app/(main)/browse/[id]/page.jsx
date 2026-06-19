import RecipeDetails from '@/component/RecipeDetails';
import { singleRecipes, singleSavedRecipes } from '@/lib/api/customer/recipe';
import { serverSession } from '@/lib/session';
import React from 'react';

const page = async ({params}) => {

    const user = await serverSession()

    const {id} = await params
    const data = await singleRecipes(id)
    const save = await singleSavedRecipes(user?.id)
    const isSaved = save.find(item => item.saveId === data._id)
    // const filter1 = save.find(v => v.saveId === data?._id)
    // const filter2 = save.find(v => v.userId === data?.userId)
    console.log(data)

    return (
        <div>
            <RecipeDetails recipe={data} isSaved={isSaved}></RecipeDetails>
        </div>
    );
};

export default page;