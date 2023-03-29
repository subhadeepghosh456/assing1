import React from "react";
import None from "./None";
import BasicTwo from './Basic_two';
import Basic from "./Basic";

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
        <span style={{ fontWeight: "bold" }}>04.</span> Partners
      </p>
      <Basic />
      <BasicTwo />
      <None />
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
