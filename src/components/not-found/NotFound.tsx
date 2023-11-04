import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found__container">
      <div className="not-found__content">
        <h1>404 - Not Found!</h1>
        <h3>
          Page not found or you do not have permission to access this page!
        </h3>
        <h4 style={{ fontWeight: "normal" }}>
          For testing purpose only, use this account:&nbsp;
          <span style={{ fontWeight: "bolder" }}>
            thiennguyen.kt@gmail.com / 123456789x@X
          </span>
        </h4>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
