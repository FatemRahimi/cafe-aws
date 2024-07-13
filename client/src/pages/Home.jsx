import React, { useEffect } from "react";
import { useState, useContext } from "react";
import Category from "../components/Categories";
import Menu from "../components/Menu";
import AppContext from "../components/Context";

const Home = () => {
  const { data } = useContext(AppContext);

  const [menuItems, setMenuItems] = useState(data);
  const allCategories = ["All", ...new Set(data.map((item) => item.category))];

  useEffect(() => {
    setMenuItems(data);
  }, [data]);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="bg-gray-900 py-10 px-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-300">
        CYF Cafe Menu
      </h2>
      <Category categories={allCategories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
};

export default Home;
