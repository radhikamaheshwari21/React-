import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
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
      </ul>
      <div className="container mx-auto my-6 text-center">
        <label className="text-white text-lg font-semibold">
          Thanks for visiting!
        </label>
      </div>
    </footer>
  )
}

export default Footer
