import Overview from '@/component/dashboard/admin/Overview';
import { countRecepies, countUsers } from '@/lib/api/admin/users';
import React from 'react';

const page = async () => {

    const userCnt = await countUsers()
    const recipeCnt = await countRecepies()
    // console.log(recipeCnt)

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <Overview userCnt={userCnt} recipeCnt={recipeCnt}></Overview>
        </div>
    );
};

export default page;