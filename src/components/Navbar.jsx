import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-denter gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jagadeshwaran-b-7b4a741b2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/jagadeshwaran13/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
            <FaSquareXTwitter />
            <a href="https://www.instagram.com/__.j_a_c_k_s.__?utm_source=qr&igsh=MXQ2c2l0cWI3c2Ridw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        </div>
    </nav>
  )
}

export default Navbar