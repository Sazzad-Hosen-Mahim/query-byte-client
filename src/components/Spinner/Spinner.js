import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`${path}`, {
        state: location?.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="m-auto">
          <h1 className="text-center mx-auto items-center">
            redirecting to you in {count} seconds
          </h1>
          <div className="text-center text-6xl mx-auto items-center loading loading-infinity loading-lg"></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
