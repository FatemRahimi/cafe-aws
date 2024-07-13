import React, { useContext, useEffect, useState } from "react";
import AppContext from "../components/Context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Form() {
  const { id, setId, data, setData, setAdminData } = useContext(AppContext);

  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEditData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/admin/meals/${id}/edit`
        );
        if (!res.ok) {
          throw new Error("Failed to find menu item");
        }
        const editData = await res.json();
        setFetchSuccess(true);
        setCategory(editData.category);
        setDescript(editData.descript);
        setImg(editData.img);
        setTitle(editData.title);
        setPrice(editData.price);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEditData();
  }, [id]);

  const editItem = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/admin/meals/${id}/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            category: category,
            price: price,
            img: img,
            descript: descript,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update menu item");
      }
      const { item: updatedItem } = await res.json();
      const updatedMenuItems = data.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      setData(updatedMenuItems);
      alert("Successfully updated menu item.");
    } catch (error) {
      alert(error);
      console.error(error);
    } finally {
      setId(0);
      navigate("/admin");
    }
  };

  const addHandler = async (e) => {
    e.preventDefault();
    if (!title || !category || !price || !img || !descript) {
      alert("Please Fill all the fields!");
      return;
    }
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/admin/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          price,
          img,
          descript,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to add your item!");
      }
      const { item } = await res.json();
      data.push(item);
      setData(data);
      setAdminData(data);
      alert("Your Item Added!");
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/admin");
    }
  };

  return (
    <div class="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 class="text-center m-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-4xl text-brightRed">
        {fetchSuccess ? "EDIT ITEM" : "ADD ITEM"}
      </h1>
      <form>
        <div class="md:flex mb-6">
          <label class="w-1/3 text-gray-500 font-bold px-10" htmlFor="title">
            Title
          </label>
          <input
            class="w-full bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div class="md:flex mb-6">
          <label class="w-1/3 text-gray-500 font-bold px-10" htmlFor="category">
            Category
          </label>
          <select
            class="w-full bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div class="md:flex mb-6">
          <label class="w-1/3 text-gray-500 font-bold px-10" htmlFor="price">
            Price
          </label>
          <input
            class="w-full bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            style={{ width: "100%", height: "auto" }}
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div class="md:flex mb-6">
          <label class="w-1/3 text-gray-500 font-bold px-10" htmlFor="image">
            Image
          </label>
          <input
            class=" w-full bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            id="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <div class="md:flex mb-6">
          <label class="w-1/3 text-gray-500 font-bold px-10" htmlFor="descript">
            Description
          </label>
          <textarea
            class="w-full bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            id="descript"
            value={descript}
            onChange={(e) => setDescript(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="md:flex justify-center">
          <div>
            <Link to="/admin">
              <button class="border font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600">
                Back
              </button>
            </Link>
            <button
              class="py-4 px-5 m-5 text-sm font-medium rounded-lg border bg-gray-800 text-gray-300  hover:text-white hover:bg-gray-700"
              type="button"
              onClick={fetchSuccess ? editItem : addHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
