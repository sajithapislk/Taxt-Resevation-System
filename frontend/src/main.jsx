// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PublicLayout from './layouts/Public.jsx';
import UserLayout from './layouts/User.jsx';
import DriverLayout from './layouts/Driver.jsx';
import Welcome from './pages/public/Welcome.jsx';
import About from './pages/public/About.jsx'; 
import Login from './pages/public/Login.jsx'; 
import TakeRide from './pages/user/TakeRide.jsx';
import AvailableRide from './pages/user/AvailableRide.jsx';
import DriverDashboard from './pages/driver/Dashboard.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from './layouts/Admin.jsx';
import AdminDashboard from './pages/admin/Dashboard.jsx';
import User from './pages/admin/User.jsx';
import Booking from './pages/admin/Booking.jsx';
import VehicleCategory from './pages/admin/VehicleCategory.jsx';
import Payments from './pages/admin/Payments.jsx';
import Reservation from './pages/admin/Reservation.jsx';



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
      {
        path: "login",
        element: <Login />,
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
      {
        path: "available-driver",
        element: <AvailableRide />,
      },
      {
        path: "rides",
        element: <AvailableRide />,
      },
    ],
  },
  {
    path: "/driver",
    element: <DriverLayout />,
    children: [
      {
        path: "dashboard",
        element: <DriverDashboard />,
      },
    ],
  },
  {
    path:"/admin",
    element: <AdminLayout />,
    children:[
      {
        path:"dashboard",
        element: <AdminDashboard/>,
      },
      {
        path:"user",
        element:<User/>,
      },
      {
        path:"booking",
        element:<Booking/>,
      },
      {
        path:"vehicle-category",
        element:<VehicleCategory/>,
      },
      {
        path:"payment",
        element:<Payments/>,
      },
      {
        path:"reservation",
        element:<Reservation/>,
      }
    ]
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
