import React from "react";
import ReactToPrint from "react-to-print";
import SingleCard from "../User/SingleCard";

const PrintButton = () => {
  let printableComponentRef = null;
  return (
    <div>
      Print
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => printableComponentRef}
      ></ReactToPrint>
      <SingleCard ref={(el) => (printableComponentRef = el)}></SingleCard>
    </div>
  );
};

export default PrintButton;
