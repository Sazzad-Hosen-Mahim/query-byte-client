import React from "react";
import Layout from "./Layout/Layout";
import { useSearch } from "../../context/Search";
import { Link } from "react-router-dom";
import NavMenu from "./Layout/NavMenu";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search result"}>
      <div className="">
        <div className="flex ">
          <NavMenu></NavMenu>
        </div>
        <div className="text-center">
          <h1>
            Search results:{" "}
            {values?.results.length < 1
              ? "No card found"
              : `Found ${values?.results?.length}`}
          </h1>
        </div>
        <div>
          <div className="grow min-h-full p-20 rounded text-white">
            {values?.results?.map((card) => (
              <Link
                className="card  w-96 shadow-xl"
                key={card._id}
                to={`/dashboard/user/cards/${card.slug}`}
              >
                <div>
                  <figure>
                    <img
                      className="max-h-96 w-full"
                      src={`${process.env.REACT_APP_API}/api/v1/businessCard/card-photo/${card._id}`}
                      alt="Business card"
                    />
                  </figure>
                  <div className="card-body bg-sky-600">
                    <h2 className="card-title">{card.name}</h2>
                    <p>{card.email}</p>
                    <p>{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
