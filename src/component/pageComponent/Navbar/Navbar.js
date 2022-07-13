import { Fragment } from "react";
import * as React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logo from "../../asset/Logo.png";
import SmLogo from "../../asset/LogoSmall.png";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Badge from "@mui/material/Badge";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Account from "../../../page/account/index"
import { useSelector, useDispatch } from "react-redux"
import { SignOut } from '../../../store/modules/auth/actions/authAction'
import Notification from '../../smallComponent/notification'

const navigation = [
  { name: "Homepage", href: "/", current: true },
  { name: "Membership", href: "/membership", current: false },
  { name: "News", href: "/content/news", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Example({ auth, setAuth }) {
  const currentState = useSelector((state) => state);
  const { isAuthenticated, currentUser } = currentState.Auth;

  const dispatch = useDispatch()

  const logoutUser = () => dispatch(SignOut());



  const CheckNotif = () => {
    if (isAuthenticated != true) {
      alert("not yet login");
    }
  };

  const handleOut = (e) => {
    e.preventDefault()
    logoutUser()
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <Disclosure as="nav" className="mb-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-light hover:text-white hover:bg-gray-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={SmLogo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden ml-6 sm:block md:mx-auto">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-white hover:bg-gray-dark hover:text-white",
                          "px-3 py-2 rounded-md text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md   shadow-sm px-4 py-2  text-lg font-medium text-white hover:bg-gray-dark hover:text-white">
                          Class
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/offline-class"
                                  className={classNames(
                                    active
                                      ? "bg-gray text-gray-dark"
                                      : "text-gray-dark",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Offline
                                </Link>
                              )}
                            </Menu.Item>


                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/online-class"
                                  className={classNames(
                                    active
                                      ? "bg-gray text-gray-dark"
                                      : "text-gray-dark",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Online
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-dark p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-dark focus:ring-white"
                  onClick={CheckNotif}
                >
                  <span className="sr-only">View notifications</span>
                  <Badge
                    color="secondary"
                    variant="dot"
                    invisible={isAuthenticated ? false : true}
                    className={isAuthenticated ? "animate-pulse" : ""}
                  >
                    {/* <NotificationsActiveIcon /> */}
                    <Notification className="text-white" />
                  </Badge>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-dark flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-dark focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      {currentUser && currentUser.avatar_path ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={currentUser.avatar_path}
                          alt=""
                        />
                      ) : (
                        <AccountCircle className="text-white" />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {isAuthenticated ? (
                        <>
                          <Menu.Item>

                            <h1
                              className={classNames(

                                "block px-4 py-2 text-sm text-gray-gray"
                              )}
                            >
                              <AccountBoxIcon className="mr-4" />
                              Your Profile
                            </h1>

                          </Menu.Item>
                          <Menu.Item>
                            <Account></Account>
                          </Menu.Item>
                          <form
                            method="POST"
                            action="#"
                            onSubmit={handleChange}
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  onClick={handleOut}
                                  className={classNames(
                                    active
                                      ? "text-red"
                                      : "",
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                >
                                  <LogoutIcon className="mr-4" />
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </>
                      ) : (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/sign-in"
                                className={classNames(
                                  active ? "bg-gray-light" : "",
                                  "block px-4 py-2 text-sm text-gray-dark"
                                )}
                              >
                                <AssignmentTurnedInIcon className="mr-4" />
                                Sign In
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="sign-up"
                                className={classNames(
                                  active ? "bg-gray-light" : "",
                                  "block px-4 py-2 text-sm text-gray-dark"
                                )}
                              >
                                <EmojiPeopleIcon className="mr-4" />
                                Sign Up
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-dark text-white"
                      : "text-gray-light hover:bg-gray-dark hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
