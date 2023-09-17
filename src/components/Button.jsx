import React from "react";


const Button = (props) => {
  return (
    <div className="mt-6">
      <button
        type={props.type}
        onClick={props.onClick}
        className={`rounded-md ${
          props.isInfo
            ? "bg-transparent text-customBlack hover:underline hover:text-primaryBlue"
            : "bg-primaryBlue text-white hover:bg-blue-800 duration-300 transition-all"
        }  py-5 px-7`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
