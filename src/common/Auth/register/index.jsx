import { Link } from "react-router-dom"
import "../login/index.jsx"
import { useState } from "react"
import { registerService } from "../../../services/auth/index.jsx";
const Signup = () => {
    const [user, setUser] = useState(null);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        registerService(user);
    }
    return (
        <div className="login">
            <div className="login-card col-4 mx-auto">
                <h2 className="text-center">Register</h2>
                <div className="login-card-body w-100">
                    <form onSubmit={handleSubmit} action="">
                        <div>
                            <input onChange={handleChange} type="text" placeholder='Enter your Name' name="name" />
                        </div>
                        <div>
                            <input onChange={handleChange} type="email" placeholder='Enter your email' name="email" />
                        </div>
                        <div>
                            <input onChange={handleChange} type="password" placeholder='Enter your password' name="password" />
                        </div>
                        <div>
                            <input onChange={handleChange} type="password" placeholder='Confirm password' name="cnfPassword" />
                        </div>
                        <div className="text-center"> <button>Register</button></div>
                        <div className="text-center">
                            <span> If you have Already Account, Please </span><Link to="/login">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup