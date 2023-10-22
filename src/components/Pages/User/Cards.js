import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../context/Auth";

const Cards = () => {
  const [auth, setAuth] = useAuth();
  const [cards, setCards] = useState([]);

  //get authorized cards
  let matched = [];

  cards.forEach((card) => {
    if (card?.user?._id === auth?.user?.id) {
      matched.push(card);
    }
  });
  // console.log(matched);
  // console.log(cards);

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
    <Layout>
      <div className="flex justify-center">
        <div className="flex-none w-80 min-h-full bg-indigo-950 text-white text-center pt-10">
          <div className="flex flex-col w-3/4 mx-auto">
            <div className="btn btn-outline bg-pink-500 text-black mb-5">
              <Link to="/dashboard/user">Create Business Card</Link>
            </div>
            <div className="btn btn-outline bg-pink-500 text-black mb-5">
              <Link to="/dashboard/user/cards">Business Cards</Link>
            </div>
            <div className="btn btn-outline bg-pink-500 text-black">
              <Link to="/dashboard/user/cards">User</Link>
            </div>
          </div>
        </div>
        <div className="grow min-h-full p-20 rounded text-white">
          <div className="grid grid-cols-3 gap-4">
            {matched?.map((card) => (
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

export default Cards;
