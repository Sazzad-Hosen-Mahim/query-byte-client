import React from "react";
import imgHeader from "../../../Assets/img/header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:flex">
      <div className="flex-initial w-2/4 px-20 mt-44 ms-6 ">
        <h1 className="text-7xl text-bg-zinc-200">
          Welcome to <span className="text-indigo-500">Query Bytes.</span>
        </h1>
        <p className="mt-10 text-lg text-grey-800">
          Here you can save your necessary query and information search whenever
          you need it most. We give the most security of your information and we
          respect your privacy.
        </p>
        <Link to="/login">
          <button className="btn bg-cyan-600 hover:bg-yellow-500 text-black mt-10 px-10 ">
            Let's Start
          </button>
        </Link>
      </div>
      <div className="flex-1 mr-24 mt-20 static">
        <img className=" absolute bottom-14 right-24" src={imgHeader} alt="" />
      </div>
    </div>
  );
};

export default Header;
