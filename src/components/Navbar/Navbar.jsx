import React from 'react'
import { Link, NavLink } from 'react-router'
import amarbook from '../../assets/images/logo.png'

const Navbar = () => {
  const link = <ul className='flex flex-col items-start sm:flex-col lg:flex lg:flex-row justify-center  font-medium gap-3'>
    <li><NavLink to='/'>Home</NavLink></li>
    <li>
      <NavLink
        to='/latest'
        className='border border-lime-400 px-6 py-1 rounded-sm text-lime-400'
      >
        Latest Book
      </NavLink>
    </li>
    <li><NavLink to='/read'>Page to Read</NavLink></li>
  </ul>

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
              link
            }
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">
          <img width={80} src={amarbook} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            link
          }
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className="btn btn-info px-6 py-2 text-white">Login</NavLink>
      </div>
    </div>
  )
}

export default Navbar