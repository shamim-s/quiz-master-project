import React, { useContext } from 'react';
import { QuizContext } from './Layouts';
import QuizCard from './QuizCard';

const Home = () => {
    const allQuiz = useContext(QuizContext);
    const quizzes = allQuiz.data;
    return (
        <div>
            <h1>Home</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                {
                    quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
            </div>
        </div>
    );
};

export default Home;