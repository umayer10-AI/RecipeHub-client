import AdminManageUser from '@/component/dashboard/admin/AdminManageUser';
import { countUsers } from '@/lib/api/admin/users';
import React from 'react';

const page = async () => {

    const userCnt = await countUsers()

    return (
        <div className='max-w-[90%] mx-auto mt-10'>
            <AdminManageUser users={userCnt}></AdminManageUser>
        </div>
    );
};

export default page;