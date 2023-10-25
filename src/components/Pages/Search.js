import React from "react";
import Layout from "./Layout/Layout";
import { useSearch } from "../../context/Search";
import { Link } from "react-router-dom";
import NavMenu from "./Layout/NavMenu";
import SearchInput from "../Search/SearchInput";
import { useAuth } from "../../context/Auth";

const Search = () => {
  const [auth, setAuth] = useAuth();
  const [values, setValues] = useSearch();

  // console.log(values.results);
  const allValues = values.results;
  // console.log(allValues);

  //authorized search
  let authorized = [];

  allValues.forEach((authSearch) => {
    if (authSearch?.user === auth?.user?.id) {
      authorized.push(authSearch);
    }
  });
  console.log(authorized);

  return (
    <Layout title={"Search result"}>
      <div className="flex ">
        <div className="min-h-full">
          <NavMenu></NavMenu>
        </div>

        <div>
          <div className="grow min-h-fit p-20 rounded text-center justify-center mx-auto text-white">
            <SearchInput></SearchInput>
            <h1 className="mt-10">
              Search results:{" "}
              {authorized?.length < 1
                ? "No card found"
                : `Found ${authorized.length}`}
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-5 p-10">
            {authorized.map((card) => (
              <Link
                className="card text-white w-96 shadow-xl"
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
                  <div className="card-body h-52 bg-sky-600">
                    <h2 className="card-title">{card.name}</h2>
                    <p>{card.email}</p>
                    <p>{card.companyName}</p>
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
