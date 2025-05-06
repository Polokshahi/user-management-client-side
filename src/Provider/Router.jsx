import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../LayOut/MainLayout";
import Login from "../Component/Login Form/Login";
import Signup from "../Component/SignUp Form/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[

        {
          path: "/login",
          element: <Login></Login>
        },

        {
          path: "/signup",
          element: <Signup></Signup>
        }
        

       
      ]
    },
  ]);

  export default router;