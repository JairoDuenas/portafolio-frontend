import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const onHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div
      className="container-fluid bg-dark bg-gradient d-flex"
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="not-found text-center row " style={{}}>
        <h1 className="text-white font-monospace " style={{ fontSize: 70 }}>
          404
        </h1>
        <p className="text-white font-monospace">Page Not found</p>
        <span className="icon" style={{ fontSize: 50, marginBottom: 20 }}>
          ⛔️
        </span>
        <div className="button">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={onHome}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
