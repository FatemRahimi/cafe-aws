import { useState } from "react";

function Search({ setAdminData, setIsSearching }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword) {
      fetch(`${process.env.REACT_APP_API_URL}/admin/q?str=${keyword}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("No items match.");
          }
          return response.json();
        })
        .then((data) => {
          setAdminData(data);
          setIsSearching(true);
          setKeyword("");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="relative">
        <input
          class="w-full p-4 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50"
          placeholder="Search..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          type="text"
          id="keyword"
          name="keyword"
        />
        <button class="absolute top-0 right-0 p-3 h-full text-sm font-medium rounded-r-lg bg-gray-800 text-gray-300  hover:text-white hover:bg-gray-700">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}

export default Search;
