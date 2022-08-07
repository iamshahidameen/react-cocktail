import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail" id={id}>
      <div className="img-container">
        <img src={image} alt="A1" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <a className="btn btn-primary btn-details" href={`/cocktail/${id}`}>
          details
        </a>
      </div>
    </article>
  );
};

export default Cocktail;
