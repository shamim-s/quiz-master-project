import React, { useContext } from 'react';
import { QuizContext } from './Layouts';
import QuizCard from './QuizCard';
import image from '../image/126.png'

const Home = () => {
    const allQuiz = useContext(QuizContext);
    const quizzes = allQuiz.data;
    return (
        <div>
            <div className='lg:flex justify-between items-center lg:p-14 md:p-14'>
                <div className='lg:w-1/2 md:w-1/2'>
                    <img src={image} className='lg:rounded-xl md:rounded-lg' alt="" />
                </div>
                <div className='lg:w-1/2 md:w-1/2 lg:p-12 md:p-10'>
                    <h1 className='lg:text-4xl md:text-3xl font-bold mb-6 text-purple-500'>Play some quiz here!</h1>
                    <p>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                {
                    quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Home;