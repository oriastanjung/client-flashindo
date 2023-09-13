import React from "react";

const SearchBar = () => {
  return (
    <div className="relative mt-6 sm:px-4 px-2">
      <input
        type="search"
        placeholder="Masukkan kode service"
        className="sm:w-[600px] w-full p-6 rounded-md bg-bgInput outline-none"
      />
    </div>
  );
};

export default SearchBar;
