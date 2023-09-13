import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="mt-6">
      <Link to="/" target="_blank">
        <button className="rounded-md bg-primaryBlue text-white py-5 px-7">
          Lihat Service
        </button>
      </Link>
    </div>
  );
};

export default Button;
