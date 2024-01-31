import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'landing',
            index: true,
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
