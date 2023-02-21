import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

import { CostumCard } from "./CostumCard";

const Content = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="#" className="flex ml-2 md:mr-24">
                <MdAccountBalance className="h-8 mr-3" />
                <span className="capitalize self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  user management
                </span>
              </a>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a className="capitalize">user management</a>
                </li>
                <li>
                  <a className="capitalize">master user</a>
                </li>
                <li>
                  <a className="capitalize">Dark Mode</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserAlt />
                <span className="ml-3 capitalize">user management</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserFriends />
                <span className="flex-1 ml-3 whitespace-nowrap capitalize">
                  master user
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="py-6 sm:ml-64">
        <div className="p-4 mx-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <CostumCard />
        </div>
      </div>
    </>
  );
};

export default Content;
