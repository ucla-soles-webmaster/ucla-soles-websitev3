import React from "react";
import "./CoverSection.css";

export default function CoverSection({ title, imageUrl }) {
  return (
    <div
      className="cover-section d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh", // adjust for desired height
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />
      <h1 className="fw-bold position-relative cover-title">{title}</h1>
    </div>
  );
}
