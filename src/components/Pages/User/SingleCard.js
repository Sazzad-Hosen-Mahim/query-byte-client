import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

const SingleCard = () => {
  const [card, setCard] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getSingleCard = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/businessCard/get-business-card/${params.slug}`
      );

      //  console.log(data.card.slug);
      setCard(data.card);
    } catch (error) {
      console.log(error);
      toast.error("Data can't read properties of undefined");
    }
  };
  //   console.log(card);

  useEffect(() => {
    getSingleCard();
    //eslint-disable-next-line
  }, []);

  //delete a card
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to delete this card?");
      if (!answer) return;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/businessCard/delete-card/${card._id}`
      );
      navigate(`/dashboard/user/cards`);
      toast("Card deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while tried to delete a card");
    }
  };
  console.log(card);
  return (
    <Layout>
      <div className="flex ">
        <div className="flex-none w-80 min-h-screen bg-indigo-950 text-white text-center pt-10">
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
          <div className="flex justify-center">
            <figure>
              <img
                className="max-h-96 w-full"
                src={`${process.env.REACT_APP_API}/api/v1/businessCard/card-photo/${card._id}`}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center pt-5">
            <h2 className="text-2xl flex font-bold mb-8">
              <BsFillPersonLinesFill className="text-yellow-400 me-5"></BsFillPersonLinesFill>{" "}
              Name: {card.name}
            </h2>
            <h1 className="text-2xl flex mb-8">
              <MdEmail className="text-yellow-400 me-5"></MdEmail> Email:{"   "}
              {card.email}
            </h1>
            <h1 className="text-2xl flex mb-8">
              <BsFillTelephoneFill className="text-yellow-400 me-5"></BsFillTelephoneFill>{" "}
              Phone:{"   "}
              {card.phone}
            </h1>
            <h1 className="text-2xl flex mb-8">
              <AiFillHome className="text-yellow-400 me-5"></AiFillHome>{" "}
              Address:
              {"   "}
              {card.address}
            </h1>
            <h1 className="text-2xl flex mb-8">
              <HiCode className="text-yellow-400 me-5"></HiCode> Description:
              {"   "}
              {card.description}
            </h1>
          </div>
          <Link to={`/dashboard/user/update/${card.slug}`}>
            <button className="btn btn-accent btn-outline me-4">Update</button>
          </Link>
          <button
            className="btn btn-error  btn-outline me-4"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button className="btn btn-accent btn-outline me-4">Print</button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleCard;
