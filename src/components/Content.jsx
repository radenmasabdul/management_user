import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ThemeContext } from "../redux/context";

import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import { MdAccountBalance, MdDarkMode } from "react-icons/md";

import { CostumCard, CardMasterUser } from "./CostumCard";
import avatar from "../assets/avatar.png";

const Content = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-slate-800 dark:border-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link to="/" className="flex ml-2 md:mr-24">
                <MdAccountBalance className="h-8 mr-3  dark:fill-white" />
                <span className="capitalize self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  user management
                </span>
              </Link>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={avatar} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-800"
              >
                <li>
                  <a className="justify-between dark:text-white hover:dark:bg-teal-500">
                    Profile
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="capitalize dark:text-white hover:dark:bg-teal-500"
                  >
                    user management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master"
                    className="capitalize dark:text-white hover:dark:bg-teal-500"
                  >
                    master user
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsLight(!isLight)}
                    className="hover:dark:bg-teal-500"
                  >
                    <span>
                      <MdDarkMode
                        className={`text-amber-400 text-2xl ${
                          isLight ? "" : "hidden" && isLight ? "hidden" : ""
                        }`}
                      />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-slate-800 dark:border-white"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-800">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:dark:bg-teal-500"
              >
                <FaUserAlt />
                <span className="ml-3 capitalize">user management</span>
              </Link>
            </li>
            <li>
              <Link
                to="/master"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:dark:bg-teal-500"
              >
                <FaUserFriends />
                <span className="flex-1 ml-3 whitespace-nowrap capitalize">
                  master user
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="py-6 sm:ml-64">
        <div className="p-4 mx-2 border-2 border-slate-800 border-dashed rounded-lg dark:border-white mt-14">
          <CostumCard />
        </div>
      </div>
    </>
  );
};

const ContentMaster = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-slate-800 dark:border-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link to="/" className="flex ml-2 md:mr-24">
                <MdAccountBalance className="h-8 mr-3 dark:fill-white" />
                <span className="capitalize self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  user management
                </span>
              </Link>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={avatar} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-800"
              >
                <li>
                  <a className="justify-between dark:text-white hover:dark:bg-teal-500">
                    Profile
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="capitalize dark:text-white hover:dark:bg-teal-500"
                  >
                    user management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/master"
                    className="capitalize dark:text-white hover:dark:bg-teal-500"
                  >
                    master user
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsLight(!isLight)}
                    className="hover:dark:bg-teal-500"
                  >
                    <span>
                      <MdDarkMode
                        className={`text-amber-400 text-2xl ${
                          isLight ? "" : "hidden" && isLight ? "hidden" : ""
                        }`}
                      />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-slate-800 dark:border-white"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-800">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:dark:bg-teal-500"
              >
                <FaUserAlt />
                <span className="ml-3 capitalize">user management</span>
              </Link>
            </li>
            <li>
              <Link
                to="/master"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:dark:bg-teal-500"
              >
                <FaUserFriends />
                <span className="flex-1 ml-3 whitespace-nowrap capitalize">
                  master user
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="py-6 sm:ml-64">
        <div className="p-4 mx-2 border-2 border-slate-800 border-dashed rounded-lg dark:border-white mt-14">
          <CardMasterUser />
        </div>
      </div>
    </>
  );
};

export { Content, ContentMaster };
