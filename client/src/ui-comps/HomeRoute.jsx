import React from 'react'
import "../ui-styles/homeroute.scss"

import { Link } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';
export default function HomeRoute() {
  return (
    <Link to="/">
      <div className="route">
        <p>
          <SlArrowLeft className='arrow' />
          Home
        </p>
      </div>
    </Link>
  );
}
