import React from "react";
import Complex from "./Complex";
import BasicTwo from './Basic_two';
import None from "./None";

const First = () => {
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
        <span style={{ fontWeight: "bold" }}>05.</span> Contact Us
      </p>
      <Complex />
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

export default First;
