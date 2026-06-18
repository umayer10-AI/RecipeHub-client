import RecipeDetails from '@/component/RecipeDetails';
import { singleRecipes } from '@/lib/api/customer/recipe';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await singleRecipes(id)
    console.log(data)

    return (
        <div>
            <RecipeDetails recipe={data}></RecipeDetails>
        </div>
    );
};

export default page;