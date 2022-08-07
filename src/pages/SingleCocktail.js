import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [singleDrink, setSingleDrink] = useState('');

  const drinkInfo = async () => {
    const resp = await fetch(`${url}${id}`);
    const data = await resp.json();
    console.log(id, 'drink id');

    const { drinks } = data;

    setSingleDrink(drinks[0]);
  };
  useEffect(() => {
    drinkInfo();
  }, []);
  console.log(singleDrink, 'set single drink');
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{singleDrink.strDrink}</h2>
      <div className="drink">
        <img src={singleDrink.strDrinkThumb} alt={singleDrink.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {singleDrink.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {singleDrink.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {singleDrink.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span> {singleDrink.strGlass}
          </p>
          <p>
            <span className="drink-data">instructons :</span>{' '}
            {singleDrink.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            <span> {singleDrink.strIngredient1}</span>
            <span> {singleDrink.strIngredient2}</span>
            <span> {singleDrink.strIngredient3}</span>
            <span> {singleDrink.strIngredient4}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
