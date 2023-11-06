import React from "react";
import "../ui-styles/homeroute.scss";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

export default function HomeRoute() {
  return (
    <Link className="route" to="/">
      <div>
        <p>
          <SlArrowLeft className="arrow" />
          Home
        </p>
      </div>
    </Link>
  );
}
