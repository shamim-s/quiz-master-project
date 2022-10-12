{/* <h1>Some Important questions</h1>
            <div>
                <h2>1. What is the purpose of react router</h2>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div>
                <h2>2. How does context api work</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h2>2. React useRef Hook</h2>
                <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. <br />
                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
                </p>
            </div> */}







import { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { QuizContext } from '../components/Layouts';

const Chart = () => {
    const quizzes = useContext(QuizContext);
    const data = quizzes.data;
    return (
        <div className='lg:mt-20 md:mt-20'>
            <LineChart className='mx-auto' width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;

const quizzes = useContext(QuizContext);
    const data = quizzes.data;