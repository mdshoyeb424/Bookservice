import { Link, useNavigate } from "react-router-dom"
import "./login.scss"
import { useState } from "react";
import { loginService } from "../../../services/auth";
const Login = () => {
    const navigate=useNavigate();
    const [user,setUser] = useState(null);
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    const handlleSubmit=(e)=>{
        e.preventDefault();
         loginService(user)
         navigate("/");
    }
    return (
        <div className="login">
            <div className="login-card col-4 mx-auto">
                <h2 className="text-center">Login</h2>
                <div className="login-card-body w-100">
                    <form onSubmit={handlleSubmit} action="">
                        <div>
                            <input onChange={handleChange} type="email" placeholder='Enter your email' name="email"  />
                        </div>
                        <div>
                            <input onChange={handleChange} type="password" placeholder='Enter your password'  name="password"/>
                        </div>
                        <div className="text-center"> <button>Login</button></div>
                        <div className="text-center">
                           <span> If you have not Account, Please </span><Link to="/register">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login