import AdminManageUser from '@/component/dashboard/admin/AdminManageUser';
import { countUsers } from '@/lib/api/admin/users';
import { getServerToken } from '@/lib/token';
import React from 'react';

const page = async () => {

    const token = await getServerToken()
    // console.log(token)
    const userCnt = await countUsers(token)

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <AdminManageUser users={userCnt}></AdminManageUser>
        </div>
    );
};

export default page;