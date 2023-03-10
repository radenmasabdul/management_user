import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateDataUsers,
  createNewUsers,
  fetchAllUsers,
} from "../redux/reducer/reducer";
import { token } from "../redux/api";

import axios from "axios";

import Swal from "sweetalert2";

import { FaEye } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const ModalAddData = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const saveUser = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      gender: gender,
      status: status,
      token: token,
    };
    // console.log("Data user yang akan dikirim:", user);
    dispatch(createNewUsers(user));
    // alert("User berhasil dibuat!");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <label htmlFor="my-modal-3" className="btn btn-info text-white">
        Add Data
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <form className="modal" onSubmit={saveUser}>
        <div className="modal-box relative dark:bg-slate-800">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 hover:dark:bg-teal-500"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center dark:text-white">
            Add New Data
          </h3>
          <div className="divider before:bg-slate-800 after:bg-slate-800 dark:before:bg-white dark:after:bg-white" />
          <p className="py-2 dark:text-white">Name</p>
          <input
            type="text"
            placeholder="Input Your Name"
            className="input w-full dark:bg-slate-800 dark:text-white dark:border-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p className="py-2 dark:text-white">Email</p>
          <input
            type="email"
            placeholder="Input Your Email"
            className="input w-full dark:bg-slate-800 dark:text-white dark:border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option className="my-4">Select Gender</option>
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
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option className="my-4">Select Status</option>
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
      </form>
    </>
  );
};

const ModalViewData = (props) => {
  const { id } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchUserById(id);
  }, []);

  const fetchUserById = async (id) => {
    // console.log("ini id:" + id);
    const response = await axios.get(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setStatus(response.data.status);
    // console.log("ini response:" + response);
  };

  return (
    <>
      <label htmlFor={id} className="cursor-pointer flex justify-center">
        <FaEye className="fill-green-500" size={20} />
      </label>

      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative dark:bg-slate-800">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2 hover:dark:bg-teal-500"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center dark:text-white">
            View Data
          </h3>
          <div className="divider before:bg-slate-800 after:bg-slate-800 dark:before:bg-white dark:after:bg-white" />
          <p className="py-2 text-left dark:text-white">Name</p>
          <input
            type="text"
            className="input w-full dark:bg-slate-800 dark:text-white dark:border-white"
            value={name}
            readOnly
            disabled
          />
          <p className="py-2 text-left">Email</p>
          <input
            type="email"
            className="input w-full dark:bg-slate-800 dark:text-white dark:border-white"
            value={email}
            readOnly
            disabled
          />
          <label
            htmlFor="gender"
            className="py-2 text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gender
          </label>
          <select
            value={gender}
            readOnly
            disabled
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value="gender" className="my-4 capitalize">
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
            value={status}
            readOnly
            disabled
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value="status" className="my-4 capitalize">
              select status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    </>
  );
};

const ModalEditData = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchUserById(id);
    dispatch(updateDataUsers);
  }, [id, token, dispatch]);

  const fetchUserById = async (id) => {
    const response = await axios.get(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
    setStatus(response.data.status);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = { name, email, gender, status };
        axios.put(`https://gorest.co.in/public/v2/users/${id}`, updatedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire("Saved!", "", "success");
        dispatch(updateDataUsers(id, updatedData));
        dispatch(fetchAllUsers());
        // console.log("Data user yang akan dikirim:", updatedData);
        // console.log(id);
      }
    });
  };

  return (
    <>
      <label htmlFor={id} className="cursor-pointer flex justify-center">
        <FaUserEdit className="fill-blue-500" size={20} />
      </label>

      <input type="checkbox" id={id} className="modal-toggle" />
      <form className="modal" onSubmit={handleSave}>
        <div className="modal-box relative dark:bg-slate-800">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2 hover:dark:bg-teal-500"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center dark:text-white">
            Edit Data
          </h3>
          <div className="divider before:bg-slate-800 after:bg-slate-800 dark:before:bg-white dark:after:bg-white" />
          <p className="py-2 text-left dark:text-white">Name</p>
          <input
            type="text"
            className="input w-full dark:bg-slate-800 dark:text-white dark:border-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="py-2 text-left dark:text-white">Email</p>
          <input
            type="email"
            className="input w-full dark:bg-slate-800 dark:text-white dark:border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="gender"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value="gender" className="my-4 capitalize">
              select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label
            htmlFor="status"
            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white py-2"
          >
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value="status" className="my-4 capitalize">
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
      </form>
    </>
  );
};

export { ModalAddData, ModalViewData, ModalEditData };
