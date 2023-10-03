import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import logo from '../../../assets/icon/icon1.png'



const Navber = () => {

  return (
    <div className="navbar  bg-black/80 text-white">
      <div className="navbar-start">
        {/* mobile */}

        <div className="drawer z-40 mt-4 mx-2 lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" >

              <div className="indicator cursor-pointer">
                <svg htmlFor="my-drawer" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

              </div>

            </label>

          </div>
          <div className="drawer-side  ">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-[250px] md:w-[400px] lg:w-[400px] min-h-full bg-white text-base-content">
              {/* Sidebar content here */}
              <li><Link to={'/'}>HOME</Link></li>

              <li><Link>MENU</Link> </li>


            </ul>
          </div>
        </div>

        {/* laptop */}


        <div className='flex lg:ml-[80px]'>
          <img className='w-[40px]' src={logo} alt="logo" />
          <Link className=" mt-1 px-2 text-xl">MEAL</Link>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          <li className='px-2'><Link to={'/'}>HOME</Link></li>

          <li className='px-2'><Link>MENU</Link> </li>
        </ul>
      </div>

      <div className="navbar-end lg:pr-[100px] md:pr-[80px]">
        <div className="flex">

          {/* Cart */}
          <div className="drawer drawer-end z-[40]">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-4 px-4">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button indicator cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item -z-10">0</span>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div>

          {/* Profile */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <CgProfile size={30} />
              </div>
            </label>
            <ul tabIndex={0} className=" menu-sm dropdown-content  z-[1] p-2 shadow bg-gray-200  w-52">
              <li>
                <Link to={'profile'}>
                  Profile

                </Link>
              </li>
              <li><Link>Order</Link></li>
              <li><Link to='/signin'>Sign In</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;