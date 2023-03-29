import React from "react";

const Head = () => {
  return (
    <div className="head">
      <div className="head-two">
        <span style={{ fontSize: "4rem", fontWeight: "bolder" }}>5</span>
        <span style={{ fontWeight: "bold" }}>Pages</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>$300</p>
        <p style={{ fontSize: "14px" }}> Page Design</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>$200</p>
        <p style={{ fontSize: "14px" }}>Interactions & Animations</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>$100</p>
        <p style={{ fontSize: "14px" }}>CMS / Dynamic Data / Integration</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"end",}}>
        <span style={{fontWeight:"bold"}}>Sub Total</span>
        <span style={{ fontSize: "4rem", fontWeight: "bolder" }}>$800</span>
        
      </div>
    </div>
  );
};

export default Head;
