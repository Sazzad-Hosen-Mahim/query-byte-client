import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../../../context/Auth";
import NavMenu from "../Layout/NavMenu";

const User = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"User - Query Bytes"}>
      <div className="flex">
        <div className="h-screen">
          <NavMenu></NavMenu>
        </div>
        <div className="grow px-64 mt-24">
          <h1 className="text-4xl text-white font-bold mb-10 text-red-400">
            USER DETAILS:{" "}
          </h1>
          <hr className=" text-white mx-auto mb-10" />
          <p className="text-3xl text-white mb-5">
            Name:{" "}
            <span className="text-5xl text-sky-500">{auth?.user?.name}</span>
          </p>
          <p className="text-3xl text-white mb-5">
            Email: <span className="text-yellow-400">{auth?.user?.email}</span>
          </p>
          <p className="text-3xl text-white mb-5">Phone: {auth?.user?.phone}</p>
          <p className="text-3xl text-white mb-5">
            Address: {auth?.user?.address}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default User;
