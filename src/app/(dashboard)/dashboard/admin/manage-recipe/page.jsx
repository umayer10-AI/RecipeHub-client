import ManageRecipe from '@/component/dashboard/admin/ManageRecipe';
import { countRecepies } from '@/lib/api/admin/users';
import { getServerToken } from '@/lib/token';
import React from 'react';

const page = async () => {

    const token = await getServerToken()
    const recipes = await countRecepies(token)

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <ManageRecipe recipes={recipes}></ManageRecipe>
        </div>
    );
};

export default page;