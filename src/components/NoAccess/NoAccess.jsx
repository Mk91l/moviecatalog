import React from "react";
import "./NoAccess.css";

const noAccess = () => {
  return (
    <div class="container-fluid bg-dark" style={{ height: "100%" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "79.7vh" }}
      >
        <h2 className="title">
          Non hai i permessi per accedere a questa sezione!
        </h2>
      </div>
    </div>
  );
};

export default noAccess;
