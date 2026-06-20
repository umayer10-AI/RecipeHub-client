import Browse from '@/component/Browse';
import React from 'react';

const page = async ({searchParams}) => {

    const query = await searchParams
    const search = query.search || '';
    const category = query.category || '';

    return (
        <div>
            <Browse search={search} category={category}></Browse>
        </div>
    );
};

export default page;