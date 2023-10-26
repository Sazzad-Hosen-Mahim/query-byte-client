import React from "react";
import { Link } from "react-router-dom";
import "./Navmenu.css";

const NavMenu = () => {
  return (
    <div className="flex-none w-80 min-h-full nav-menu text-white text-center pt-10">
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="btn btn-info btn-outline  mb-5 nav-menu-button text-black">
          <Link to="/dashboard/user">User</Link>
        </div>
        <div className="btn  btn-info btn-outline nav-menu-button text-black mb-5">
          <Link to="/dashboard/create-card">Create Business Card</Link>
        </div>
        <div className="btn  btn-info btn-outline nav-menu-button text-black mb-5">
          <Link to="/dashboard/user/cards">All Business Cards</Link>
        </div>
        {/* <div className="btn  btn-info btn-outline nav-menu-button text-black mb-5">
          <Link to="/dashboard/scan">Scan Card</Link>
        </div> */}
      </div>
    </div>
  );
};

export default NavMenu;
