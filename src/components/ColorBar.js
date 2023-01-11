import React from "react";

export default function ColorBar(props) {
  return (
    <div className="container">
      <div className="mainColor-bar color-bar-th">
        <button
          className=" btn-danger m-1"
          style={{
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            border: "none",
          }}
          onClick={() => {
            props.colorTheme("red");
          }}
        ></button>
        <button
          className=" btn-success m-1"
          style={{
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            border: "none",
          }}
          onClick={() => {
            props.colorTheme("green");
          }}
        ></button>
        <button
          className=" btn-primary m-1"
          style={{
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            border: "none",
          }}
          onClick={() => {
            props.colorTheme("blue");
          }}
        ></button>
      </div>
    </div>
  );
}
