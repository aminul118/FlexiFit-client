import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'about',
            element: <About/>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>
    
  }
]);

export default router;
