import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='h-16 bg-cyan-500 flex justify-between items-center pl-12 pr-12'>
            <Link to={'/'}><h1 className='lg:text-2xl md:text-2xl text-sm font-bold text-white'>QUIZ-MASTER</h1></Link>
            <div className='text-white text-lg font-bold'>
                <NavLink to={'/home'} className='ml-12'>HOME</NavLink>
                <NavLink to={'/statistic'} className='ml-12'>STATISTIC</NavLink>
                <NavLink to={'/more'} className='ml-12'>MORE</NavLink>
            </div>
        </nav>
    );
};

export default Header;