import Sidebar from '@/component/dashboard/SideBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <main className='w-full'>{children}</main>
        </div>
    );
};

export default layout;