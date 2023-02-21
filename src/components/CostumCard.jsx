import React from "react";

import Search from "./Search";
import ButtonLoadMore from "./ButtonLoadMore";
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>CyGanderton@mail.co</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <ModalViewData />
              </td>
            </tr>

            <tr>
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>CyGanderton@mail.co</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <ModalViewData />
              </td>
            </tr>

            <tr>
              <th>3</th>
              <td>Cy Ganderton</td>
              <td>CyGanderton@mail.co</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <ModalViewData />
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

export { CostumCard, CardMasterUser };
