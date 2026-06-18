import FavouriteCards from '@/component/dashboard/customer/FavouriteCards';
import { singleSavedRecipes } from '@/lib/api/customer/recipe';
import { serverSession } from '@/lib/session';
import React from 'react';

const page = async () => {

    const user = await serverSession()
    const save = await singleSavedRecipes(user?.id)
    console.log(save)

    return (
        <div className='max-w-[90%] mx-auto'>
            <h1 className='text-2xl font-bold my-5'>Save Files</h1>
            <FavouriteCards recipes={save}></FavouriteCards>
        </div>
    );
};

export default page;