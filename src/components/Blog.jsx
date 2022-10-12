import React from 'react';

const Blog = () => {
    return (
        <div className='lg:pl-24 lg:pr-24 md:pl-20 md:pr-20 pl-10 pr-10'>
            <h1 className='lg:text-3xl md:text-2xl text-center font-bold lg:mt-10 md:mt-10 mb-8 mt-8 text-xl'>Some Important questions</h1>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold mb-5'>1. What is the purpose of react router</h2>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold mb-5'>2. How does context api work</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='mb-8'>
                <h2 className='text-2xl font-bold mb-5'>3. React useRef Hook</h2>
                <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. <br />
                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
                </p>
            </div>
        </div>
    );
};

export default Blog;