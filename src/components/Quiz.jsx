import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

const Quiz = ({quiz}) => {
    const {id, correctAnswer, question, options} = quiz;

    const success = () =>{
        toast.success("Correct Answer!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 600
          });
    }
    const error = () =>{
        toast.error("Incorrect Answer!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 600
          });
    }
    const quizHandler = (options) =>{
        if(options === correctAnswer){
            success();
        }else{
            error();
        }
    }

    const showAns = () =>{
        toast.success(`${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 900
          });
    }

    return (
        // Main All Questions and answere div 
        <div className='border-2 border-slate-900 lg:rounded-xl md:rounded-xl m-4 relative'>
            <div className='lg:p-0 md:p-0 p-4'>
                <ToastContainer/>
            </div>
            <h1 
            className='text-center lg:text-xl md:text-2xl font-bold mt-8'>{question} </h1>
            <FontAwesomeIcon 
                onClick={showAns}
                icon={faEye} 
                className="absolute top-5 right-5 text-xl hover:text-lime-500">
            </FontAwesomeIcon>

            {/* Div for 4 separate questions quiz */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:p-14 md:p-10'>

            {/*  question 1 */}
                <div 
                onClick={() => quizHandler(options[0])}
                className={`bg-gray-900 p-6 text-white font-bold m-4 rounded-xl hover:bg-slate-700`}>
                    <p>{options[0]}</p>
                    
                </div>

            {/*  question 2 */}
                <div 
                onClick={() => quizHandler(options[1])}
                className={`bg-gray-900 p-6 text-white font-bold m-4 rounded-xl hover:bg-slate-700 `}>
                    <p>{options[1]}</p>
                </div>

            {/*  question 3 */}
                <div 
                onClick={() => quizHandler(options[2])}
                className={`bg-gray-900 p-6 text-white font-bold m-4 rounded-xl hover:bg-slate-700 `}>
                    <p>{options[2]}</p>
                </div>
            {/*  question 4 */}
                <div 
                onClick={() => quizHandler(options[3])}
                className={`bg-gray-900 p-6 text-white font-bold m-4 rounded-xl hover:bg-slate-700`}>
                    <p>{options[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default Quiz;