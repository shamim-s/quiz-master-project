import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useContext } from 'react';
import { QuizContext } from '../components/Layouts';



const Chart = () => {

    const quizzes = useContext(QuizContext);
    const data = quizzes.data;
    return (
        // width={600} height={300}
        <div className='lg:mt-20 md:mt-20 mt-10'>
            <LineChart className='mx-auto' width={390} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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