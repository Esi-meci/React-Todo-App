import React, { Component } from "react";
// import './button.css'

function Button({ className, children, ...props }) {
  return (
    <button className={`btn-add ${className ? className : ""}`}>
      {children}
    </button>
  );
}
export default Button;
