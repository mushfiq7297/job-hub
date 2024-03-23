import React from 'react'
import ReactDOM from 'react-dom/client'
import Error from './Error/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Routes/Root';
import Home from './Home/Home';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Statistics from './Statistics/Statistics';
import Blog from './Blog/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/Statistics",
        element: <Statistics />
      },
      {
        path: "/Applied",
        element: <AppliedJobs />,
      },

      {
        path: "/Blog",
        element: <Blog />
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
