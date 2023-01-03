import React, { useState } from "react"
import { BrowserRouter, Outlet, Link } from "react-router-dom";
import Logo from '../assets/ecourself.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const hamburgerButton = () => {
        setNav(!nav)
    }
    return (
        <>
        <nav className="grid grid-flow-col py-10 px-6 justify-between items-center | md:px-20 md:py-5 xl:grid-flow-col">
            <img src={Logo} alt="logo" />
            <button onClick={hamburgerButton} id="hamburgerButton" type="button" aria-label="Navigasi-Button"
                className="font-bold text-xl text-purple-800 md:hidden xl:hidden">☰</button>
            <div className="hidden urbanist items-center | md:flex gap-10 | xl:flex xl:gap-10">
                <div>
                    <Link to="/" className="text-sm">Home</Link>
                </div>
                <div>
                    <Link to="/courses" className="text-sm">Course</Link>
                </div>
                <div>
                    <Link to="/resource" className="text-sm">Resource</Link>
                </div>
                <div>
                    <Link to="/about" className="text-sm">About us</Link>
                </div>
                <div
                    className="bg-soft-purple text-white py-2 px-7 rounded-sm | hover:bg-indigo-600 ">
                    <Link to="/login" className="text-sm px-3">Login</Link>
                </div>
            </div>
        </nav>
        <section
        className={!nav? "z-20 fixed left-[-100%] top-0 w-full h-screen inset-0 bg-light-purple grid gap-y-10 grid-cols-2 py-11 px-6 justify-between content-start ease-in-out duration-300 delay-75 md:hidden":"fixed bg-light-purple left-0 top-0 w-full  h-screen grid gap-y-10 grid-cols-2 py-11 px-6 justify-between content-start  ease-in-out duration-300 delay-75"}
        id="drawer">
        <img src={Logo} alt="logo"/>
        <button id="close" type="button" onClick={hamburgerButton} aria-label="Navigasi-Button"
          className="closeButton xl:hidden justify-self-end text-purple-800 font-bold text-xl">X</button>
        <div className="col-start-1 col-end-4 text-center flex flex-col xl:px-5 xl:gap-10 justify-self-center" id="menu">
          <div className="w-full border-y border-slate-300 py-5">
            <Link to="index.html" className="px-20 text-lg xl:text-dark-blue">Home</Link>
          </div>
          <div className="w-full border-b border-slate-300 py-5">
            <Link to="course.html" className="px-20 text-lg xl:text-dark-blue">Course</Link>
          </div>
          <div className="w-full border-b border-slate-300 py-5">
            <Link to="resource.html" className="px-20 text-lg xl:text-dark-blue">Resource</Link>
          </div>
          <div className="w-full border-b border-slate-300 py-5">
            <Link to="about-us" className="px-20 text-lg xl:text-dark-blue">About us</Link>
          </div>
          <div
            className="bg-soft-purple text-white px-7 py-3 mt-5 rounded-sm | xl:px-7 xl:py-2 hover:bg-indigo-600 ">
            <Link to="login.html" className="text-lg px-3">Login</Link>
          </div>
        </div>
      </section>
      <Outlet/>
        </>
    )
}

export default Navbar