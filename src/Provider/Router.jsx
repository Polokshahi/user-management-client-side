import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../LayOut/MainLayout";
import Login from "../Component/Login Form/Login";
import Signup from "../Component/SignUp Form/Signup";
import Content from "../Component/Content/Content";
import UserInfo from "../Component/UserInfo/UserInfo";


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
        },
        
        {
          path: "/userInfo",
          element: <UserInfo></UserInfo>
        },
        
        {
          path: "/content",
          element:<Content></Content>
        },
        

       
      ]
    },
  ]);

  export default router;