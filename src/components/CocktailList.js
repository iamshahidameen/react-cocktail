import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, loading, setloading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No cocktails matched your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        <article className="cocktail">
          <div className="img-container">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
              alt="A1"
            />
          </div>
          <div className="cocktail-footer">
            <h3>A1</h3>
            <h4>Cocktail glass</h4>
            <p>Alcoholic</p>
            <a className="btn btn-primary btn-details" href="/cocktail/17222">
              details
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CocktailList;
