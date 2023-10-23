import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="flex-none w-80 min-h-full bg-indigo-950 text-white text-center pt-10">
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="btn btn-outline bg-pink-500 text-black mb-5">
          <Link to="/dashboard/user">Create Business Card</Link>
        </div>
        <div className="btn btn-outline bg-pink-500 text-black mb-5">
          <Link to="/dashboard/user/cards">Business Cards</Link>
        </div>
        <div className="btn btn-outline bg-pink-500 text-black">
          <Link to="/dashboard/user/cards">User</Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
