// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/public/Welcome.jsx';
import About from './pages/public/About.jsx';  // Example of another page component
import PublicLayout from './layouts/Public.jsx';  // The layout you just created
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,  // Use Layout here
    children: [
      {
        path: "/",  // Default route
        element: <App />,
      },
      {
        path: "about",  // Nested route for the About page
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
