import React from 'react';
import style from './index.module.css'
import ContinentList from './ContinentList';

const CountriesByContinent = ({ countriesContinent, continent, setCountrieData }) => {
  return (
    <div className={style.main}>
      <div className={style.title}> <h1>{continent}</h1> </div>
      <ContinentList countriesContinent={countriesContinent} setCountrieData={setCountrieData} />
    </div>
  );
}
 
export default CountriesByContinent;