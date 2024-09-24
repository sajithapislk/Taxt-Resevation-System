// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PublicLayout from './layouts/Public.jsx';
import UserLayout from './layouts/User.jsx';
import DriverLayout from './layouts/User.jsx';
import Welcome from './pages/public/Welcome.jsx';
import About from './pages/public/About.jsx'; 
import TakeRide from './pages/user/TakeRide.jsx';
import DriverDashboard from './pages/driver/Dashboard.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin } from './pages/adminDashboard/Admin.jsx';
import Users from './pages/adminDashboard/components/Users.jsx';
import Dashboard from './pages/adminDashboard/components/Dashboard.jsx';
import Trips from './pages/adminDashboard/components/Trips.jsx';
import Payments from './pages/adminDashboard/components/Payments.jsx';



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
  {
    path:"/admin",
    element: <Admin />,
    children:[
      {
        path:"dashboard",
        element: <Dashboard/>,
      },
      {
        path:"users",
        element: <Users/>,
      },
      {
        path:"trips",
        element: <Trips/>,
      },
      {
        path:"payments",
        element:<Payments/>,
      },
     
    ]
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
