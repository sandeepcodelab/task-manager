import { Link } from "react-router";
import Container from "../Container/Container";
import { Facebook, Instagram, Twitter, Linkedin, Copyright } from "lucide-react";
import { useSelector } from "react-redux";


function Footer() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return (
    <footer className="backdrop-blur-xl bg-gray-900/80 border-t border-gray-700/40 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-gray-400 text-sm px-4">
          {/* Left - Logo / Title */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-white">
              Task<span className="text-blue-500">Manager</span>
            </h2>
            <p className="text-gray-500 mt-1">
              Manage your tasks efficiently 🚀
            </p>
          </div>

          {/* Center - Links */}
          <ul className="flex gap-6 mb-4 md:mb-0">
            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to="/">Home</Link>
            </li>
            { isAuthenticated && (<li className="cursor-pointer hover:text-blue-400 transition">
              <Link to="/dashboard">Tasks</Link>
            </li>
            )}
            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to="/help">Help</Link>
            </li>
          </ul>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram  /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><Linkedin /></a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="flex justify-center border-t border-gray-700/40 py-4 text-center text-gray-500 text-xs">
          <Copyright size={16} strokeWidth={2} /> {new Date().getFullYear()} TaskManager. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
