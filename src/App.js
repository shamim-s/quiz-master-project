import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Layouts from "./components/Layouts";
import QuizDetail from "./components/QuizDetail";
import Statistic from "./components/Statistic";
import Blog from "./components/Blog";

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
      {path:'/blog', element:<Blog></Blog>},
      {
        path:'quiz/:id',
        element: <QuizDetail></QuizDetail>,
        loader: ({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
        }
      }
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
