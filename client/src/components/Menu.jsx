import React, { useContext } from "react";
import "../App.css";
import AppContext from "./Context";

const Menu = ({ items }) => {
  const { isLoading } = useContext(AppContext);

  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading && (
        <>
          <div className="my-8 rounded shadow-lg shadow-gray-900  bg-gray-800">
            <div className="rounded-t h-72 w-full bg-gray-950"></div>
            <div className="m-8 w-72 h-5 bg-gray-700"></div>
            <div className="m-8 w-20 h-5 mt-3 bg-gray-700"></div>
            <div className="m-8 w-72 h-5 mt-3 bg-gray-700"></div>
          </div>
          <div className="my-8 rounded shadow-lg shadow-gray-900  bg-gray-800">
            <div className="rounded-t h-72 w-full bg-gray-950"></div>
            <div className="m-8 w-72 h-5 bg-gray-700"></div>
            <div className="m-8 w-20 h-5 mt-3 bg-gray-700"></div>
            <div className="m-8 w-72 h-5 mt-3 bg-gray-700"></div>
          </div>
          <div className="my-8 rounded shadow-lg shadow-gray-900  bg-gray-800">
            <div className="rounded-t h-72 w-full bg-gray-950"></div>
            <div className="m-8 w-72 h-5 bg-gray-700"></div>
            <div className="m-8 w-20 h-5 mt-3 bg-gray-700"></div>
            <div className="m-8 w-72 h-5 mt-3 bg-gray-700"></div>
          </div>
          <div className="my-8 rounded shadow-lg shadow-gray-900  bg-gray-800">
            <div className="rounded-t h-72 w-full bg-gray-950"></div>
            <div className="m-8 w-72 h-5 bg-gray-700"></div>
            <div className="m-8 w-20 h-5 mt-3 bg-gray-700"></div>
            <div className="m-8 w-72 h-5 mt-3 bg-gray-700"></div>
          </div>
        </>
      )}

      {items?.map((menuItem) => {
        const { id, title, img, descript, price } = menuItem;
        return (
          <article
            key={id}
            className="my-8 rounded shadow-lg shadow-gray-900 bg-gray-800 duration-300 hover:-translate-y-1 cursor-pointer  hover:text-brightRedLight"
          >
            <img
              src={img}
              alt={title}
              className="rounded-t h-72 w-full object-fill"
            />
            <div className="p-8 text-left">
              <header className="text-lg mb-4 font-bold leading-relaxed">
                <h4 className="mt-3 font-semibold text-lg">{title}</h4>
                <h4>£{price}</h4>
              </header>
              <p className="leading-5 text-gray-400">{descript}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
