import React from 'react'
import '../styles/banner.scss'

export default function Banner(props) {
  return (
    <div className="Banner">
      <div className="Banner__content">
        <div className="banner__text">
          <h2>{props.title}</h2>
          <p>
            {props.description}
          </p>
          <button>Go to shop</button>
        </div>
        <div className="banner__image">
          <img className='image__banner' src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
}
