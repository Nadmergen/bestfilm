import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layuot from "./Layout";
import Movies from "../pages/Movies";
import MovieDetail from "../pages/MovieDetail";
import ActorDetail from "../pages/ActorDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layuot />,
      children: [
        {
          path: '/',
          element: <Movies/>
        },
        {
          path: '/',
          element: <MovieDetail/>
        },
        {
          path: '/',
          element: <ActorDetail/>
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
