import Overview from '@/component/dashboard/admin/Overview';
import { countPremium, countRecepies, countUsers } from '@/lib/api/admin/users';
import React from 'react';

const page = async () => {

    const userCnt = await countUsers()
    const recipeCnt = await countRecepies()
    const premiumCnt = await countPremium()
    // console.log(recipeCnt)

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <Overview userCnt={userCnt} recipeCnt={recipeCnt} premiumCnt={premiumCnt}></Overview>
        </div>
    );
};

export default page;