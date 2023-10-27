import React, { useEffect, useState, useRef } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { BiSolidBusiness } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { MdNaturePeople } from "react-icons/md";
import NavMenu from "../Layout/NavMenu";
import { useReactToPrint } from "react-to-print";

const SingleCard = () => {
  const [card, setCard] = useState([]);

  const componentRef = useRef();
  const params = useParams();
  const navigate = useNavigate();

  const getSingleCard = async () => {
    try {
      const { data } = await axios.get(
        `https://query-byte-server.vercel.app/api/v1/businessCard/get-business-card/${params.slug}`
      );

      setCard(data.card);
    } catch (error) {
      console.log(error);
      toast.error("Data can't read properties of undefined");
    }
  };

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
        `https://query-byte-server.vercel.app/api/v1/businessCard/delete-card/${card._id}`
      );
      navigate(`/dashboard/user/cards`);
      toast("Card deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while tried to delete a card");
    }
  };

  //handling print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Layout title={"Business Card - Query Bytes"}>
      <div className="flex">
        <NavMenu></NavMenu>
        <div
          className="grow min-h-full p-20 rounded text-white"
          ref={componentRef}
        >
          <div className="flex justify-center">
            <figure>
              <img
                className="max-h-96 w-full"
                src={`https://query-byte-server.vercel.app/api/v1/businessCard/card-photo/${card._id}`}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center pt-5">
            <h2 className="text-2xl flex font-bold mb-6 text-fuchsia-600">
              <BsFillPersonLinesFill className="text-yellow-400 me-5"></BsFillPersonLinesFill>{" "}
              Name: {card.name}
            </h2>
            <h2 className="text-2xl flex font-bold mb-6 text-sky-500">
              <BiSolidBusiness className="text-yellow-400 me-5"></BiSolidBusiness>{" "}
              Company Name: {card.companyName}
            </h2>
            <h2 className="text-2xl flex  mb-6">
              <BiWorld className="text-yellow-400 me-5"></BiWorld> Country:{" "}
              {card.country}
            </h2>
            <h2 className="text-2xl flex  mb-6">
              <MdNaturePeople className="text-yellow-400 me-5"></MdNaturePeople>{" "}
              Business Nature: {card.businessNature}
            </h2>
            <h2 className="text-2xl flex  mb-6">
              <BiCategoryAlt className="text-yellow-400 me-5"></BiCategoryAlt>{" "}
              Interest: {card.interest}
            </h2>
            <h1 className="text-2xl flex mb-6">
              <MdEmail className="text-yellow-400 me-5"></MdEmail> Email:{"   "}
              {card.email}
            </h1>
            <h1 className="text-2xl flex mb-6">
              <BsFillTelephoneFill className="text-yellow-400 me-5"></BsFillTelephoneFill>{" "}
              Phone:{"   "}
              {card.phone}
            </h1>
            <h1 className="text-2xl flex mb-6">
              <AiFillHome className="text-yellow-400 me-5"></AiFillHome>{" "}
              Address:
              {"   "}
              {card.address}
            </h1>
            <h1 className="text-2xl flex mb-6">
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
          <button
            className="btn btn-accent btn-outline me-4"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleCard;
