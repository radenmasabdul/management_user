import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/reducer/reducer";

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
                    <AiFillDelete />
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
