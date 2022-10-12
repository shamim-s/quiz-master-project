import React, { useContext } from 'react';
import { QuizContext } from './Layouts';
import QuizCard from './QuizCard';
import image from '../image/126.png'

const Home = () => {
    const allQuiz = useContext(QuizContext);
    const quizzes = allQuiz.data;
    return (
        <div className='lg:p-0 md:p-0 p-8'>
            <div className='lg:flex justify-between items-center lg:p-14 md:p-14'>

                 {/* header image */}
                <div className='lg:w-1/2 md:w-1/2'>
                    <img src={image} className='lg:rounded-xl md:rounded-lg rounded-lg' alt="" />
                </div>
                {/* Header text  */}
                <div className='lg:w-1/2 md:w-1/2 lg:p-12 md:p-10'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mb-6 text-purple-500 lg:mt-0 md:mt-0 mt-10'>Play some quiz here!</h1>
                    <p>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.</p>
                </div>
            </div>

            {/* Single quiz  */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:mt-0 md:mt-0 mt-8'>
                {
                    quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Home;