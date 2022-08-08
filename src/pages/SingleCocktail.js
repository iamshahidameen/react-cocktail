import React from 'react';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState('');

  const drinkInfo = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();

      const { drinks } = data;

      setCocktail(drinks[0]);
      setLoading(false);
    } catch (error) {
      console.log(error.resp);
      setLoading(false);
    }
  };
  useEffect(() => {
    drinkInfo();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktails Data</h2>;
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{cocktail.strDrink}</h2>
      <div className="drink">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {cocktail.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {cocktail.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {cocktail.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span> {cocktail.strGlass}
          </p>
          <p>
            <span className="drink-data">instructons :</span>{' '}
            {cocktail.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            <span> {cocktail.strIngredient1}</span>
            <span> {cocktail.strIngredient2}</span>
            <span> {cocktail.strIngredient3}</span>
            <span> {cocktail.strIngredient4}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
