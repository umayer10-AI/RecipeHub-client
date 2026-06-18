import RecipeDetails from '@/component/RecipeDetails';
import { singleRecipes, singleSavedRecipes } from '@/lib/api/customer/recipe';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await singleRecipes(id)
    const save = await singleSavedRecipes(data?.userId)
    const filter = save.find(v => v.saveId === id)
    // console.log(filter)

    return (
        <div>
            <RecipeDetails recipe={data} filter={filter}></RecipeDetails>
        </div>
    );
};

export default page;