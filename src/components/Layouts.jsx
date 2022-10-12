import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const QuizContext = createContext([])

const Layouts = () => {
    const quizzes = useLoaderData();
    return (
        <QuizContext.Provider value={quizzes}>
                <Header></Header>
                <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Layouts;