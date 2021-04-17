import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      hello from error page
      <Link to="/">click me to go back home</Link>
    </div>
  );
};

export default Error;
