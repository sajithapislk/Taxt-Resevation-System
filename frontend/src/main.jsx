// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PublicLayout from './layouts/Public.jsx';
import UserLayout from './layouts/User.jsx';
import Welcome from './pages/public/Welcome.jsx';
import About from './pages/public/About.jsx'; 
import TakeRide from './pages/user/TakeRide.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "take-ride",
        element: <TakeRide />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
