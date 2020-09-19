import React from "react";
import { Link } from "react-router-dom";

export default function LogOut() {
  return (
    <Link to="/" className="btn btn-primary btn-lg">
      logOut
    </Link>
  );
}
