import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";
import {loader as landingLoader} from './pages/Landing.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'landing',
            index: true,
            loader: landingLoader,
            errorElement: <h2>There was an error....</h2>,
            element: <Landing />
        },
        {
            path: 'newsletter',
            element: <Newsletter />
        },
        {
            path: 'cocktail',
            element: <Cocktail />
        }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
