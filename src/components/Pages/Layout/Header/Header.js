import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import img1 from "../../../../Assets/img/qb-logo.png";
import "./Header.css";
import { useAuth } from "../../../../context/Auth";
import { toast } from "react-toastify";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
  };
  return (
    <div className="navbar bg-neutral-900 shadow-2xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
          <img className="img-logo" src={img1} alt="query bytes logo"></img>

          <h1>Query Bytes</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1 text-lg">
          <li className="mx-2">
            <Link className="hover:text-black" to="/about">
              About
            </Link>
          </li>
          <li className="mx-2">
            <Link className="hover:text-black" to="/contact">
              Contact
            </Link>
          </li>

          <li className="mx-2">
            <Link className="hover:text-black" to="/services">
              Services
            </Link>
          </li>
          <li className="mx-2">
            <Link className="hover:text-black" to="/pricing">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!auth.user ? (
          <>
            <Link
              to="/login"
              className="btn bg-yellow-400 border-none text-black hover:text-white mx-5"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="btn bg-indigo-950 hover:bg-yellow-400 border-none text-white hover:text-black me-8"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <div className="dropdown dropdown-end dropdown-hover">
              <label
                tabIndex={0}
                className="btn my-1 px-10 py-2 me-10 bg-indigo-950 text-white"
              >
                {auth?.user?.name}
                <AiFillCaretDown></AiFillCaretDown>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-6 shadow bg-indigo-950 rounded-box w-64"
              >
                <li className="text-center">
                  <Link
                    className="btn mb-3 pt-3 border-none bg-black text-white hover:bg-pink-600 hover:text-white"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="/login"
                    onClick={handleLogOut}
                    className="btn bg-pink-600 hover:bg-black border-none text-white hover:text-white"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
