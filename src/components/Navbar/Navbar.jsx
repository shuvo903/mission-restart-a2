import React from 'react';

const Navbar = () => {
    return (
        <div>
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="text-2xl font-bold">CS — Ticket System</a>
  </div>
  <div className="navbar-end hidden lg:flex items-center text-lg font-medium">
    <ul className="menu menu-horizontal px-1 items-center gap-4 ">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
    </ul>
  <div className="flex items-center ml-4">
    <a className="btn text-white font-semibold border-none bg- bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-md">+ New Ticket</a>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;