import React from "react";

const SearchBar = (props) => {
  return (
    <div className="relative mt-6 sm:px-4 px-2">
      <input
        type="text"
        required={props.isRequired}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="sm:w-[600px] w-full p-6 rounded-md bg-bgInput outline-none"
      />
    </div>
  );
};

export default SearchBar;
