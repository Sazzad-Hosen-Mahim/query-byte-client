import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/businessCard/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/dashboard/user/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="join" onSubmit={handleSubmit}>
        <input
          className="input input-bordered join-item me-3 w-96"
          placeholder="Search card"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="btn join-item rounded-md bg-sky-500 hover:bg-white text-black"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
