import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import Button from "../Button";
import { useSelector } from "react-redux";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)


  return (
    <header className="backdrop-blur-xl bg-gray-900/80 shadow-md border-b border-gray-700/40 sticky top-0 z-50">
      <Container>
        <nav className="flex justify-between items-center py-4 text-gray-200 px-4">
          {/* Logo / Title */}
          <div className="text-2xl font-extrabold tracking-wide">
            <Link to="/">
              Task<span className="text-blue-500">Manager</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li className="hover:text-blue-400 transition">
              <NavLink to="/" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                Home
              </NavLink>
            </li>
            {
              isAuthenticated && (
                <li className="hover:text-blue-400 transition">
                  <NavLink to="/dashboard" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                    Tasks
                  </NavLink>
                </li>
              )
            }
            <li className="hover:text-blue-400 transition">
              <NavLink to="/contact" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                Contact
              </NavLink>
            </li>
            <li className="hover:text-blue-400 transition">
              <NavLink to="/about" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                About
              </NavLink>
            </li>
            <li className="hover:text-blue-400 transition">
              <NavLink to="/help" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                Help
              </NavLink>
            </li>
          </ul>

          {/* Auth Button */}
          <div className="hidden md:block">
            { isAuthenticated ? (
                <Link to="/logout">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 rounded-xl font-semibold text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition cursor-pointer"
                    text="Logout"
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 rounded-xl font-semibold text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition cursor-pointer"
                    text="Login"
                  />
                </Link>
              )
            }
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="cursor-pointer"
              icon={menuOpen ? <X size={28} /> : <Menu size={28} />}
            />
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 border-t border-gray-700/50">
            <ul className="flex flex-col gap-4 py-4 px-6 font-medium text-gray-200">
              <li className="cursor-pointer hover:text-blue-400 transition">
                <NavLink to="/" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                  Home
                </NavLink>
              </li>
              {
                isAuthenticated && (
                  <li className="hover:text-blue-400 transition">
                    <NavLink to="/dashboard" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                      Tasks
                    </NavLink>
                  </li>
                )
              }
              <li className="cursor-pointer hover:text-blue-400 transition">
                <NavLink to="/contact" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                  Contact
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition">
                <NavLink to="/about" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-blue-400 transition">
                <NavLink to="/help" className={ ({isActive}) => isActive ? "text-blue-400" : "text-white" }>
                  Help
                </NavLink>
              </li>
              <li>
                { isAuthenticated ? (
                    <Link to="/logout">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 rounded-xl   font-semibold text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition cursor-pointer"
                        text="Logout"
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 rounded-xl font-semibold text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition cursor-pointer"
                        text="Login"
                      />
                    </Link>
                  )
                }  
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
