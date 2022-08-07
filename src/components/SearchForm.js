import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleChange = (e) => {
    // setSearchTerm(e.target.value);
  };
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value="a"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
