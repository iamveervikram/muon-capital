import React from "react";
import { BiWallet } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import "./Main.css";
import MainContent from "./MainContent";
function Main({ hideVal, onChange }) {
  return (
    <div className="mainM">
      <div className="mainHeader">
        <div className="headerLeft">
          <CgMenuBoxed
            onClick={onChange}
            className="menuButton"
            style={
              hideVal === "none" ? { display: "flex" } : { display: "none" }
            }
          />
          <p>Section</p>
        </div>
        <div className="headerRight">
          <BiWallet
            style={{
              height: "18px",
              width: "18px",
              color: "#3772ff",
              fontWeight: "bold",
            }}
          />
          <p>&emsp;0.2 $XYZ</p>
          <p className="tier">Tier 1</p>
        </div>
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
    </div>
  );
}

export default Main;
