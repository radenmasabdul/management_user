import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../redux/reducer/reducer";

import { FaEye } from "react-icons/fa";

const ModalAddData = () => {
  return (
    <>
      <label htmlFor="my-modal-3" className="btn btn-info text-white">
        Add Data
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">Add New Data</h3>
          <div className="divider"></div>
          <p className="py-2">Name</p>
          <input
            type="text"
            placeholder="Input Your Name"
            className="input w-full"
          />
          <p className="py-2">Email</p>
          <input
            type="email"
            placeholder="Input Your Email"
            className="input w-full"
          />
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Gender
          </label>
          <select
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value="role" className="my-4 capitalize">
              select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Status
          </label>
          <select
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value="role" className="my-4 capitalize">
              select status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <div className="flex flex-wrap justify-end py-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ModalViewData = () => {
  const dispatch = useDispatch();
  const userDataById = useSelector((state) => state.data.userDataById);
  const token = useSelector((state) => state.token);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById({ id, token }));
  }, [dispatch, id, token]);

  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="cursor-pointer flex justify-center"
      >
        <FaEye />
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">View Data</h3>
          <div className="divider"></div>

          {userDataById &&
            userDataById.map((users) => (
              <>
                <p className="py-2 text-left">Name</p>
                <input
                  type="text"
                  placeholder="Input Your Name"
                  className="input w-full"
                  value={users.name}
                  readOnly
                />
                <p className="py-2 text-left">Email</p>
                <input
                  type="email"
                  placeholder="Input Your Email"
                  className="input w-full"
                  value={users.email}
                  readOnly
                />
                <label
                  htmlFor="gender"
                  className="py-2 text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled value="role" className="my-4 capitalize">
                    select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label
                  htmlFor="status"
                  className="py-2 text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Status
                </label>
                <select
                  id="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled value="role" className="my-4 capitalize">
                    select status
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export { ModalAddData, ModalViewData };
