import { allRecipes } from '@/lib/api/customer/recipe';
import React from 'react';
import RecipeCards from './RecipeCards';

const Browse = async () => {

    const data = await allRecipes()
    // console.log(data)

    return (
        <div className='max-w-[80%] mx-auto'>
            <h2 className='text-3xl font-bold my-10 text-center'>Browse Page</h2>
            <RecipeCards recipes={data}></RecipeCards>
        </div>
    );
};

export default Browse;