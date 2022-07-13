
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useState } from 'react'
import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";
const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const history = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    swal({
      icon: 'success',
      title: 'Logout Successfully!'
    })
    history('/')
  }

  // // // Getting Administrator Data
  // const [isAdmin, setIsAdmin] = useState(false)
  const email = localStorage.getItem('email')
  const token = localStorage.getItem('token')
  // if ((email === 'admin@javaagroglobalindo.com') && (token !== null)) {
  //   setIsAdmin(true)
  // }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Java Agroglobalindo
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Tailwind Starter Kit
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/dashboard"
                >
                  <i className="fas fa-tv opacity-75  mr-2 text-sm"></i> Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/product-list"
                >
                  <i className="fas fa-tasks text-blueGray-400 mr-2 text-sm"></i> Product List
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/product-highlights"
                >
                  <i className="fas fa-highlighter text-blueGray-400 mr-2 text-sm"></i> Product Highlight
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/home-page-information"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i> Home Page Information
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  to="/question-list"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>Email</Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Dashboard Settings
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">

                <Link
                  className={email === 'admin@javaagroglobalindo.com' ? 'text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold' : 'hidden'}
                  to="/account"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base"></i> Account Management
                </Link>
              </li>

              <li className="inline-flex">
                <button
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  onClick={logoutHandler}
                >
                  <i className="fas fa-sign-out-alt mr-2 text-blueGray-400 text-base"></i>Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Sidebar