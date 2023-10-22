import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../../../context/Auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  // console.log(auth?.user?.id);
  return (
    <Layout>
      <h1>This is home page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Home;
