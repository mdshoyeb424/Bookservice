import { lazy } from "react"

const Login = lazy(()=>import("../common/Auth/login/index.jsx"));
const Register = lazy(()=>import("../pages/auth/Register.jsx"));
const Home = lazy(()=>import("../pages/home"));
export const routes = [
  { path: "/",
    element: <Home />,
    needsAuth: true,
  },
  { path: "/login",
    element: <Login />,
    needsAuth:false ,
  },
  { path: "/register",
    element: <Register />,
    needsAuth: false,
  },
]