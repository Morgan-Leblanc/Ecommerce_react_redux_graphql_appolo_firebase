import React from "react";
import "./menu-item.style.scss";
export default function MenuItem({ title, image, size }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}
