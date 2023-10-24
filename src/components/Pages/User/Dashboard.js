import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import NavMenu from "../Layout/NavMenu";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  //use navigate
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [businessNature, setBusinessNature] = useState("");
  const [interest, setInterest] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [user, setUser] = useState(auth?.user?.id);

  //create card function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const cardData = new FormData();
      cardData.append("name", name);
      cardData.append("companyName", companyName);
      cardData.append("country", country);
      cardData.append("businessNature", businessNature);
      cardData.append("interest", interest);
      cardData.append("email", email);
      cardData.append("phone", phone);
      cardData.append("address", address);
      cardData.append("description", description);
      cardData.append("photo", photo);
      cardData.append("user", user);

      console.log(
        name,
        companyName,
        businessNature,
        interest,
        country,
        email,
        phone,
        user,
        description,
        address
      );

      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/businessCard/create-business-card`,
        cardData
      );
      console.log(res);
      if (res && res?.data?.success) {
        toast.success("Card created successfully");
        navigate("/dashboard/user/cards");
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Query Bytes"}>
      <div className="flex justify-center">
        <NavMenu></NavMenu>
        <div className="grow h-fit p-20 rounded text-white">
          <div className="form-control w-1/3  rounded-lg bg-indigo-950 p-12">
            <h1 className="text-lg text-pink-500 text-center font-semibold mb-4">
              Create Business Card
            </h1>
            <label className="btn btn-outline-primary mb-3">
              {photo ? photo?.name : "Upload Profile Picture"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => {
                  setPhoto(e.target.files[0]);
                }}
                hidden
              />
            </label>

            <div className="text-center">
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="profile pic"
                    className="h-40 img"
                  />
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered input-info w-full bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company Name"
                className="input input-bordered input-info w-full bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter your country"
                className="input input-bordered input-info w-full bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={businessNature}
                onChange={(e) => setBusinessNature(e.target.value)}
                placeholder="Enter your business nature"
                className="input input-bordered input-info w-full bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="Enter your interested field"
                className="input input-bordered input-info w-full bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="input input-bordered input-info w-full bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="input input-bordered input-info w-full max-w-xs bg-black mt-3"
                required
              />
            </div>
            <div>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter some description"
                className="textarea textarea-accent w-full max-w-xs bg-black mt-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="input input-bordered input-info w-full max-w-xs bg-black mt-3"
                required
              />
            </div>

            <button
              className="btn btn-warning w-full mt-8"
              onClick={handleCreate}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
