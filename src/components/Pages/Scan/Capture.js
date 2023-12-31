import React, { useRef } from "react";
import Webcam from "react-webcam";
import Layout from "../Layout/Layout";

const Capture = () => {
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    // You can send this image to the server for storage.
  };

  return (
    <Layout>
      <Webcam audio={false} ref={webcamRef} />
      <button className="btn btn-info btn-outline" onClick={captureImage}>
        Capture
      </button>
    </Layout>
  );
};

export default Capture;
