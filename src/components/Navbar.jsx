import logo from "../assets/assets/YIlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2x1">
        <a 
          href="https://www.linkedin.com/in/yousef-ibrahim-367629249/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/YousefGIbrahim" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/yousef._.michel?igsh=ZXlxa3lxOWZpdm4w&utm_source=qr" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://drive.google.com/file/d/1OVEdEGL7UeCMKq_i1VfIXmKY56lrzLWr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition duration-300"
        >
          Get Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
