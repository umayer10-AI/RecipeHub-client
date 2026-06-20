import Browse from '@/component/Browse';
import React from 'react';

const page = async ({searchParams}) => {

    const query = await searchParams
    const search = query.search || '';
    const category = query.category || '';
    const currentPage = Number(query.page) || 1;

    return (
        <div>
            <Browse search={search} category={category} page={currentPage}></Browse>
        </div>
    );
};

export default page;