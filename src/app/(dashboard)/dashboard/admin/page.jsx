import Overview from '@/component/dashboard/admin/Overview';
import { countPremium, countRecepies, countUsers, reportsListings } from '@/lib/api/admin/users';
import React from 'react';

const page = async () => {

    const userCnt = await countUsers()
    const recipeCnt = await countRecepies()
    const premiumCnt = await countPremium()
    const list = await reportsListings()
    // console.log(recipeCnt)

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <Overview list={list} userCnt={userCnt} recipeCnt={recipeCnt} premiumCnt={premiumCnt}></Overview>
        </div>
    );
};

export default page;