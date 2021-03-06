import React from 'react';

const CountryDetails = ({ country }) => (
  <div className="country-wrapper">
    <header>
      <img
        className="flag"
        src={country.imageUrl}
        alt=""
      />
    </header>

    <div className="country-name">
      <h1>{country.name}</h1>
      <h2>{`Continent: ${country.continent}`}</h2>
    </div>

    <div className="country-details">
      <div>
        <span>{country.populace}</span>
        <span>Population [mln]</span>
      </div>
      <div>
        <span>{country.capital}</span>
        <span>Capital</span>
      </div>
      <div>
        <span>{country.currency}</span>
        <span>Currency</span>
      </div>
    </div>
  </div>
);

export default CountryDetails;
