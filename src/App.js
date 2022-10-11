import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layouts from "./components/Layouts";
import More from "./components/More";
import Statistic from "./components/Statistic";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layouts></Layouts>,
    children: [
      {path:'/home', element:<Home></Home>},
      {path:'/statistic', element:<Statistic></Statistic>},
      {path:'/more', element:<More></More>}
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
