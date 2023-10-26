import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../../../context/Auth";
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Pricing from "./Pricing";
import Contact from "./Contact";

const Home = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout>
      <Header></Header>
      <Services></Services>
      <About></About>
      <Pricing></Pricing>
      <Contact></Contact>
    </Layout>
  );
};

export default Home;
