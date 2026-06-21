import MyRecipes from '@/component/dashboard/customer/MyRecipes';
import { myRecipes } from '@/lib/api/customer/recipe';
import { serverSession } from '@/lib/session';
import React from 'react';

const page = async () => {

    const user = await serverSession()
    const data = await myRecipes(user?.id)
    // console.log(data)

    return (
        <div className='max-w-[90%] mx-auto'>
            <h2 className='text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent w-fit mt-5'>My Recipes</h2>
            <p className='mb-5 text-gray-400'>{data.length} recipes published</p>
            <MyRecipes recipes={data}></MyRecipes>
        </div>
    );
};


export default page;