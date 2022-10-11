import React from 'react';
import { Link } from 'react-router-dom';
import image from '../image/Monster 404 Error-amico.svg'

const ErrorPage = () => {
    return (
        <div className='mx-auto text-center'>
            <img src={image} className='w-96 mx-auto' alt="" />
            <h1 className='lg:text-3xl md:text-3xl font-bold'>OOPS! PAGE NOT FOUND</h1>
            <p className=''>Sorry, the page you're looking for does not exist or is not available</p>
            <button className='mt-8 text-red-500 font-bold'>
                <Link to={'/'} className='flex'> 
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                     Back to home
                </Link>
                </button>
        </div>
    );
};

export default ErrorPage;