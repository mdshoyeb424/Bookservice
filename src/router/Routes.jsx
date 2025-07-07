import { lazy } from "react"

const AllBooPage = lazy(()=>import("../pages/service/book/AllBooPage"));
const AddBookPage = lazy(()=>import("../pages/service/book/"));
const Login = lazy(()=>import("../common/Auth/login"));
const Register = lazy(()=>import("../pages/auth/Register"));
const Home = lazy(()=>import("../pages/home"));
export const routes = [
  { path: "/",
    element: <Home />,
    needsAuth: true,
  },
  { path: "/service",
    element: <AllBooPage />,
    needsAuth: true,
  },
  { path: "/service/book/add",
    element: <AddBookPage />,
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