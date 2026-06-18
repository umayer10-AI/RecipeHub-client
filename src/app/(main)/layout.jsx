import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='w-full'>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default layout;