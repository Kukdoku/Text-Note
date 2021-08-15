import React from "react";
import evernote from "../images/evernote.jpg";

function Header({ username }) {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#2b66ad",
        height: "50px",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={evernote} alt="website icons" style={{ width: "60px" }} />
        <h3>NoteMeDown</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2
          style={{
            marginRight: "20px",
            color: "darkblue",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={() => window.location.reload()}
        >
          {username}
        </h2>
      </div>
    </div>
  );
}

export default Header;
