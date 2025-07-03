import { Link, useNavigate } from "react-router-dom"
import "./navbar.scss"
import { BiHome, BiLogOut, BiPhone, BiSolidFileImport } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FaServicestack } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { logoutService } from "../../services/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (logoutService()) {
      navigate('/login')
    }
  }
  return (
    <nav className='navbar'>
      <ul className="w-100">
        <li className="brand">Book Service</li>
        <ul className="ms-auto">
          {navData.map((val, index) => (<li><Link className="text-decoration-none" key={index} to={val?.url}> {val?.icons} {val.name}</Link></li>))}
          <li><div onClick={() => handleLogout()} className="text-decoration-none" ><BiLogOut /> Logout</div ></li>
        </ul>
      </ul>
    </nav>
  )
}

export default Navbar;
const navData = [
  { name: "home", url: "/", icons: <BiHome /> },
  { name: "about", url: "/about", icons: <ImProfile /> },
  { name: "contact", url: "/contact", icons: <BiPhone /> },
  { name: "service", url: "/service", icons: <FaServicestack /> },
  { name: "Join", url: "/Join", icons: <BsPerson /> },
]