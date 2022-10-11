import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Layouts from "./components/Layouts";
import More from "./components/More";
import QuizDetail from "./components/QuizDetail";
import Statistic from "./components/Statistic";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      {
        path:'/', 
        element:<Home></Home>

      },
      {path:'/statistic', element:<Statistic></Statistic>},
      {path:'/more', element:<More></More>},
      {
        path:'/quiz/:id',
        loader: ({params}) => 
        fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <QuizDetail></QuizDetail>
      },

    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
