import Overview from '@/component/dashboard/admin/Overview';
import { countPremium, countRecepies, countUsers, reportsListings } from '@/lib/api/admin/users';
import { serverSession } from '@/lib/session';
import { getServerToken } from '@/lib/token';
import React from 'react';

const page = async () => {

    const token = await getServerToken()
    const userCnt = await countUsers(token)
    const recipeCnt = await countRecepies(token)
    const premiumCnt = await countPremium()
    const list = await reportsListings()
    const user = await serverSession()

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <Overview list={list} userCnt={userCnt} recipeCnt={recipeCnt} premiumCnt={premiumCnt}></Overview>
        </div>
    );
};

export default page;