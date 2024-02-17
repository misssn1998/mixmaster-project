import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import {loader as landingLoader} from './pages/Landing.jsx'
import {loader as SingleCocktailLoader} from './pages/Cocktail'
import {action as newsletterAction} from './pages/Newsletter'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
        {
            path: 'about',
            element: <About />
        },
        {
            index: true,
            loader: landingLoader(queryClient),
            element: <Landing />
        },
        {
            path: 'newsletter',
            action: newsletterAction,
            element: <Newsletter />
        },
        {
            path: 'cocktail/:id',
            loader: SingleCocktailLoader(queryClient),
            errorElement: <SinglePageError />,
            element: <Cocktail />
        }
    ]
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
