import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <ul className="flex space-x-8 justify-center">
      <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 text-lg font-semibold'
                : 'text-white hover:text-gray-300 text-lg font-semibold'
            }
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 text-lg font-semibold'
                : 'text-white hover:text-gray-300 text-lg font-semibold'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 text-lg font-semibold'
                : 'text-white hover:text-gray-300 text-lg font-semibold'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Todo"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 text-lg font-semibold'
                : 'text-white hover:text-gray-300 text-lg font-semibold'
            }
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 text-lg font-semibold'
                : 'text-white hover:text-gray-300 text-lg font-semibold'
            }
          >
            Login
          </NavLink>
        </li>
        
        
      </ul>
      
    </header>
  )
}

export default Header
