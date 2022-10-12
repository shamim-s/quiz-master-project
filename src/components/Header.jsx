import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav 
            className='h-16 bg-purple-500 flex justify-between items-center pl-12 pr-12'>
            <Link to={'/'}><h1 className='lg:text-2xl md:text-2xl text-sm font-bold text-white '>QUIZ-MASTER</h1></Link>
            <div className={`text-white text-lg font-bold lg:block md:block flex flex-col items-center lg:static md:static absolute bg-purple-500 lg:w-96 md:w-96 w-full z-10 ease-in-out duration-200 ${open ? 'top-12 left-0 lg:p-0 md:p-0 p-8 items-center': 'top-[-120px] left-0 i items-center'}`}>
                <NavLink to={'/'} className='ml-12'>HOME</NavLink>
                <NavLink to={'/statistic'} className='ml-12'>STATISTIC</NavLink>
                <NavLink to={'/blog'} className='ml-12'>BLOG</NavLink>
            </div>
            <div className='h-6 w-6 lg:hidden md:hidden static text-white' onClick={() =>setOpen(!open)}>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>
        </nav>
    );
};

export default Header;