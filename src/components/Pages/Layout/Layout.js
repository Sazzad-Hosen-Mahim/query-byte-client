import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header></Header>
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

Layout.defaultProps = {
  title: "Query Bytes - Save your queries",
  description: "A solution to save queries",
  keywords:
    "business card, queries, print document, documents, mern, node, mongodb, database",
  author: "Sazzad Mahim",
};

export default Layout;
