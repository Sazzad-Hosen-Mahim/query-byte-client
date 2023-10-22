import React from "react";
import Layout from "../Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout title={"Error - Page Not Found"}>
      <div className="flex flex-col justify-center items-center py-32">
        <h1 className="text-5xl text-red-500 align-middle">Error 404!!</h1>
        <p className="text-xl mt-3 text-white">Page Not Found.</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
