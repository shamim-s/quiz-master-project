import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizDetail = () => {
    const allquiz = useLoaderData();
    // console.log('1', allquiz);
    const quizzes = allquiz.data.questions;
    // console.log('2', quizzes);
    return (
        <div>
            <h1 className='text-center lg:text-3xl md:text-2xl font-bold lg:mt-10 md:mt-9'>Quiz of {allquiz.data.name}</h1>
            <div className='lg:p-14 md:p-10'>
                {
                    quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;