import React from "react";
import Complex from "./Complex";
import Advanced from "./Advanced";
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
        <span style={{ fontWeight: "bold" }}>01.</span> Home
      </p>
      <Complex />
      <Advanced />
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

export default First;
