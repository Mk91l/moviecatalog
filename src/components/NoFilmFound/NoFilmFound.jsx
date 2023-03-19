import React from "react";
import image from "../../assets/nofoundmovie.jpg";
import "./Nofilmfound.css";

const noFilmFound = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "67.7vh" }}
    >
      <h2 className="title">Nessun film trovato per {props.query}</h2>
    </div>
  );
};

export default noFilmFound;
