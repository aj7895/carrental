import React from "react";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";

const Users = ({ user }) => {
  return (
    <section className="antialiased bg-gray-100 text-gray-600 py-20 px-4">
      <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Users</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Name</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Email</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Username</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center">Country</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center"></div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center"></div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  {user &&
                    user.map((user) => (
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full object-cover h-10"
                                src={user.image}
                                width="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              {user.name}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">{user.email}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            {user.username}
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">usa</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <Link
                            className="border-gray-400 text-gray-700 font-medium px-5 py-1 border-2 rounded"
                            to={`/edituser/${user._id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <Popconfirm
                            title="Are you sure to delete this Car?"
                            onConfirm={() => {
                              // dispatch(deleteCar({ carid: car._id }));
                            }}
                            okText="Yes"
                            cancelText="No"
                          >
                            <a className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded">
                              Delete
                            </a>
                          </Popconfirm>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
