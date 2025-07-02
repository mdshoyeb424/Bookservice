import { Link } from "react-router-dom"
import "./navbar.scss"
import { BiHome, BiPhone, BiSolidFileImport } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FaServicestack } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className="w-100">
        <li className="brand">Book Service</li>
        <ul className="ms-auto">
          {navData.map((val, index) => (<li><Link className="text-decoration-none" key={index} to={val?.url}> {val?.icons} {val.name}</Link></li>))}
        </ul>
      </ul>
    </nav>
  )
}

export default Navbar;
const navData = [
  { name: "home", url: "/home", icons: <BiHome /> },
  { name: "about", url: "/about", icons: <ImProfile /> },
  { name: "contact", url: "/contact", icons: <BiPhone /> },
  { name: "service", url: "/service", icons: <FaServicestack /> },
  { name: "Join", url: "/Join", icons: <BsPerson /> },
]