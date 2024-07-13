import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px justify-between">
        <div>
          {categories.sort().map((category, index) => {
            return (
              <li
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-brightRedLight hover:border-gray-300 dark:hover:text-brightRedLight mr-2 cursor-pointer"
                type="button"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </li>
            );
          })}
        </div>
        <Link to="/admin">
          <li className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-brightRedLight hover:border-gray-300 dark:hover:text-brightRedLight mr-2 cursor-pointer">
            Admin Panel
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Categories;
