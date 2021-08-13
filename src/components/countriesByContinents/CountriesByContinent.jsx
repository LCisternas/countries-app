import React from 'react';
import style from './index.module.css'
import ContinentList from './ContinentList';

const CountriesByContinent = ({ countriesContinent, continent, setCountrieData }) => {
  return (
    <div>
      <h1>{continent}</h1>
      <ContinentList countriesContinent={countriesContinent} setCountrieData={setCountrieData} />
    </div>
  );
}
 
export default CountriesByContinent;