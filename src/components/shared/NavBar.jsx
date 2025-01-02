import React from 'react'
import HeaderLogo from './HeaderLogo'

const NavBar = () => {
    const NavMenu = (
        <>
          <li>
            <a className=" hover:text-white hover:bg-black text-xl " to="/">
              Home
            </a>
          </li>
    
          <li>
            {" "}
            <a className=" hover:text-white hover:bg-black text-xl " to="#">
             About
            </a>
          </li>
          <li>
            {" "}
            <a className=" hover:text-white hover:bg-black text-xl" to="#">
              Blog
            </a>
          </li>
          <li>
            {" "}
            <a className=" hover:text-white hover:bg-black text-xl" to="#">
             FAQ
            </a>
          </li>
          <li>
            {" "}
            <a className=" hover:text-white hover:bg-black text-xl " to="#">
             Contact
            </a>
          </li>
        </>
    )
  return (
    <div className="navbar bg-base-100 px-[135px]">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {NavMenu}
        </ul>
      </div>
      <a className="">
        {/* <img src="/logo.png" alt="" srcset="" /> */}
        <HeaderLogo/>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
{NavMenu}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn bg-green text-white">Sign up</a>
      <button className="btn btn-outline">Sign in</button>
    </div>
  </div>
  )
}

export default NavBar