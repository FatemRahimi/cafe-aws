import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../components/Context";
import Search from "../components/Search";

const AdminMenu = () => {
  const { data, setId, adminData, setAdminData } = useContext(AppContext);
  const [activeRow, setActiveRow] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setAdminData(data);
  }, [data, isDeleted, setAdminData]);

  function handleClick(rowId) {
    setActiveRow(rowId === activeRow ? null : rowId);
  }

  const searchHandler = () => {
    setIsSearching(false);
    setAdminData(data);
  };

  const deleteHandler = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/admin/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();

    if (response.ok) {
      const itemIndex = data.findIndex((item) => item.id === id);
      data.splice(itemIndex, 1);
      setIsDeleted(!isDeleted);
    }
    alert("Your item deleted");
  };

  const editHandler = (id) => {
    setId(id);
  };

  return (
    <>
      <div class="flex justify-between gap-20 m-8">
        <Link to="/">
          <h1 class="mx-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-4xl text-brightRed">
            Menu Items
          </h1>
        </Link>
        <div class="flex-grow">
          <Search setAdminData={setAdminData} setIsSearching={setIsSearching} />
        </div>
        {isSearching && (
          <button
            onClick={searchHandler}
            class="py-4 px-10 text-sm font-medium rounded-lg border bg-gray-800 text-gray-300  hover:text-white hover:bg-gray-700"
          >
            All
          </button>
        )}
        <Link to="/admin/form">
          <button
            onClick={setId(0)}
            class="w-max py-4 px-5  text-sm font-medium rounded-lg border bg-gray-800 text-gray-300  hover:text-white hover:bg-gray-700"
          >
            ADD ITEM
          </button>
        </Link>
        <br />
        <br />
      </div>

      <div class="flex flex-col mb-10">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="font-medium  uppercase bg-gray-800 text-gray-300">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Id
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Edit
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {adminData?.map((menuItem) => {
                    const { id, title, category, descript, price, img } =
                      menuItem;
                    return (
                      <tr
                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 cursor-pointer"
                        key={id}
                        onClick={() => handleClick(id)}
                        style={{
                          backgroundColor:
                            menuItem.id === activeRow ? "#c2c1c6" : "#f7f7f7",
                        }}
                      >
                        <td class="px-6 py-4 font-medium">{id}</td>
                        <td class="px-6 py-4">{title}</td>
                        <td class="px-6 py-4">{category}</td>
                        <td class="px-6 py-4">{price}</td>
                        <td class="px-6 py-4">
                          <img
                            src={img}
                            alt={title}
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td class=" px-6 py-4">{descript}</td>
                        <td class="px-6 py-4 hover:text-brightRedLight font-bold">
                          <Link to="/admin/form">
                            <button onClick={() => editHandler(id)}>
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td class="px-6 py-4 hover:text-brightRedLight font-bold">
                          <button onClick={() => deleteHandler(id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
