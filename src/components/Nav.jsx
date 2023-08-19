import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo/logo.png";

const Nav = () => {

  useEffect(() => {
    const logo = document.querySelector('#logo')
    const menu1 = document.querySelector('#menu1')
    const menu2 = document.querySelector('#menu2')
    const menu3 = document.querySelector('#menu3')
    const menu4 = document.querySelector('#menu4')

    if(logo) {
      setTimeout(() => {
        logo.classList.add('animate__bounceInLeft')
        logo.classList.remove('hidden')
      }, 5000)
    }

    if(menu1) {
      setTimeout(() => {
        menu1.classList.add('animate__bounceInDown')
        menu1.classList.remove('hidden')
      }, 5400)
    }
   
    if(menu2) {
      setTimeout(() => {
        menu2.classList.add('animate__bounceInDown')
        menu2.classList.remove('hidden')
      }, 5500)
    }
   
    if(menu3) {
      setTimeout(() => {
        menu3.classList.add('animate__bounceInDown')
        menu3.classList.remove('hidden')
      }, 5600)
    }
   
    if(menu4) {
      setTimeout(() => {
        menu4.classList.add('animate__bounceInDown')
        menu4.classList.remove('hidden')
      }, 5700)
    }
  }, [])

  return (
    <>
      <section className="md:mx-36 md:mt-[]">
        {/* hamburger menu */}
        <nav className="navbar md:hidden">
          <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl hover:shadow-inner hover:rounded-3xl ease-in-out rounded-3xl duration-500 w-16">
              <img src={logo} />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="font-bolzd hover:shadow-inner hover:rounded-3xl ease-in-out rounded-3xl duration-500">
                  Drak
                </Link>
              </li>
              <li>
                <details>
                  <summary className="font-bold hover:shadow-inner p-2 hover:rounded-3xl ease-in-out rounded-3xl duration-500 mr-4">
                    Menu
                  </summary>
                  <ul className="p-2 bg-base-100 font-semibold z-50">
                    <li>
                      <Link to="/portfolio">Home</Link>
                    </li>
                    <li>
                      <Link to="/portfolio/About">About</Link>
                    </li>
                    <li>
                      <Link to="/portfolio/Project">Project</Link>
                    </li>
                    <li>
                      <Link to="/portfolio/Contact">Contact</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </nav>
        </section>

        <section>    
          <nav>
            <div className="hidden md:flex justify-between text-xl w-full h-16 content-center">
              <Link
                id="logo"
                to="/"
                className="font-semibold hover:shadow-inner ml-[12%] p-2 hover:rounded-3xl hover:bg-slate-200 ease-in-out rounded-3x l duration-500 hidden animate__animated mt-[%]"
              >
                <img className="w-12" src={logo} />
              </Link>
              <nav className="flex justify-evenly gap-7 mr-[10%] mt-[1%]">
                <Link
                  id='menu1'
                  className="hover:shadow-inner p-2 hover:rounded-3xl hover:bg-slate-200 ease-in-out rounded-3xl duration-500 hidden animate__animated"
                  to="/portfolio"
                >
                  Home
                </Link>
                <Link
                  id='menu2'
                  className="hover:shadow-inner p-2 hover:rounded-3xl hover:bg-slate-200 ease-in-out rounded-3xl duration-500 hidden animate__animated"
                  to="/portfolio/About"
                >
                  About
                </Link>
                <Link
                  id='menu3'
                  className="hover:shadow-inner p-2 hover:rounded-3xl hover:bg-slate-200 ease-in-out rounded-3xl duration-500 hidden animate__animated"
                  to="/portfolio/Project"
                >
                  Project
                </Link>
                <Link
                  id='menu4'
                  className="hover:shadow-inner p-2 hover:rounded-3xl hover:bg-slate-200 ease-in-out rounded-3xl duration-500 hidden animate__animated"
                  to="/portfolio/Contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </nav>  
        {/* navbar biasa */}
      </section>
    </>
  );
};

export default Nav;
