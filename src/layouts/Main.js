import React from 'react';
import { Outlet } from 'react-router-dom';
import Cards from '../components/Cards/Cards';

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto min-h-screen flex items-center justify-center gap-16'>
            <Outlet />
            <Cards />
        </div>
    );
};

export default Main;