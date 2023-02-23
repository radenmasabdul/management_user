import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/reducer/reducer";

import { token } from "../redux/api";

import axios from "axios";

import Swal from "sweetalert2";

import Search from "./Search";
import Pagination from "./Pagination";
import { ModalAddData, ModalViewData, ModalEditData } from "./ModalAddData";

import { AiFillDelete } from "react-icons/ai";

const CostumCard = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.data.usersData);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://gorest.co.in/public/v2/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            Swal.fire({
              title: "Successfully",
              text: "Users has been deleted.",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok",
            });
            dispatch(fetchAllUsers());
          });
      } else {
        return;
      }
    });
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between">
        <Search />
        <ModalAddData />
      </div>

      <div className="overflow-x-auto table-compact my-2">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((users, index) => (
                <tr key={users.id} className="text-center">
                  <th>{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.gender}</td>
                  <td>{users.status}</td>
                  <td className="flex flex-wrap gap-2 text-center">
                    <ModalEditData id={users.id} />
                    <AiFillDelete
                      onClick={() => deleteUser(users.id)}
                      className="fill-red-600 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        <Pagination />
      </div>
    </>
  );
};

const CardMasterUser = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.data.usersData);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between">
        <Search />
      </div>

      <div className="overflow-x-auto table-compact my-2">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((users, index) => (
                <tr key={users.id} className="text-center">
                  <th>{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.gender}</td>
                  <td>{users.status}</td>
                  <td>
                    <ModalViewData id={users.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        <Pagination />
      </div>
    </>
  );
};

export { CostumCard, CardMasterUser };
