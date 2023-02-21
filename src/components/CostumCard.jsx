import React, { useEffect, useState } from "react";

import axios from "axios";

import Search from "./Search";
import ButtonLoadMore from "./ButtonLoadMore";
import Pagination from "./Pagination";
import { ModalAddData, ModalViewData } from "./ModalAddData";

const CostumCard = () => {
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>CyGanderton@mail.co</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>

            <tr>
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>CyGanderton@mail.co</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>

            <tr>
              <th>3</th>
              <td>Cy Ganderton</td>
              <td>CyGanderton@mail.co</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        <ButtonLoadMore />
      </div>
    </>
  );
};

const CardMasterUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    const response = await axios.get("https://gorest.co.in/public/v2/users");
    // console.log(response.data);
    setUser(response.data);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between">
        <Search />
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
            {user &&
              user.map((users, index) => (
                <tr key={users.id}>
                  <th>{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.gender}</td>
                  <td>{users.status}</td>
                  <td>
                    <ModalViewData />
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
