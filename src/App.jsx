import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Router from './router/Router';
import "./styles/Global.scss"
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
     <Router/>
      <ToastContainer/>
    </>
  )
}

export default App
