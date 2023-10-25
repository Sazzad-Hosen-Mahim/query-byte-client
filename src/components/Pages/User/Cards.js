import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../context/Auth";
import SearchInput from "../../Search/SearchInput";
import NavMenu from "../Layout/NavMenu";

const Cards = () => {
  const [auth, setAuth] = useAuth();
  const [cards, setCards] = useState([]);

  //get authorized cards
  let matched = [];

  cards.forEach((card) => {
    if (card?.user?._id === auth?.user?.id) {
      matched.push(card);
      // setCards(card);
    }
  });
  // console.log(matched);
  console.log(cards);

  //get all cards
  const getAllCards = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/businessCard/get-business-card`
      );
      setCards(data.cards);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <Layout title={"All Business Card - Query Bytes"}>
      <div className="flex justify-center">
        <NavMenu></NavMenu>
        <div className="grow min-h-screen p-20 rounded text-white">
          <div className="text-center mb-10">
            <SearchInput></SearchInput>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {matched?.map((card) => (
              <Link
                className="card  w-96 shadow-xl"
                key={card._id}
                to={`/dashboard/user/cards/${card.slug}`}
              >
                <div>
                  <figure>
                    <img
                      className="h-96 w-full"
                      src={`${process.env.REACT_APP_API}/api/v1/businessCard/card-photo/${card._id}`}
                      alt="Business card"
                    />
                  </figure>
                  <div className="card-body h-48 bg-sky-600">
                    <h2 className="card-title text-xl">{card.name}</h2>
                    <p className="text-xl">{card.email}</p>
                    <p className="font-bold">{card.companyName}</p>
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

export default Cards;
