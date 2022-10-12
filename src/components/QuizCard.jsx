import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({quiz}) => {
    const {id, logo, name, total} = quiz;
    return (
        <div className='lg:w-10/12 md:w-8/12 mx-auto border-2 border-slate-900 m-8 rounded-lg'>
            <div className='lg:flex md:flex justify-between'>
                <div className='bg-slate-900 lg:w-1/2 md:w-1/2'>
                    <img src={logo} className='w-52' alt="" />
                </div>
                <div className='bg-slate-200 lg:w-1/2 md:w-1/2 lg:p-4 md:p-4 rounded-r-lg relative'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <h4 className='mt-2 font-semibold'>Quiz: {total}</h4>

                    <Link to={`../quiz/${id}`}>
                    <button className='lg:absolute md:absolute lg:bottom-2 md:bottom-2 lg:left-auto md:left-auto lg:w-10/12 md:w-10/12 bg-slate-900 p-1 lg:rounded-full md:rounded-full font-bold text-white'>Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;