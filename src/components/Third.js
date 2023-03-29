import React from "react";
import AdvancedTwo from './Advanced_two'
import None from "./None";
import BasicTwo from './Basic_two';

const Third = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        marginInline: "30px",
        paddingBlock: "13px",
      }}
    >
      <p>
        <span style={{ fontWeight: "bold" }}>03.</span> About Us
      </p>
      <AdvancedTwo />
      <None />
      <BasicTwo />
      
      <div>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          $200
        </p>
      </div>
    </div>
  );
};

export default Third;
