import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto min-h-screen'>
            <Outlet />
        </div>
    );
};

export default Main;