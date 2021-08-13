import React from 'react';
import OneCountrie from './OneCountrie';
import style from './index.module.css'

const CountriesList = ({ allCountries, setCountrieData }) => {


  return (
    <div className={style.container}>
      {allCountries.map(countrie => (
        <OneCountrie 
          key={countrie.numericCode}
          countrie={countrie}
          setCountrieData={setCountrieData}
        />
      ))}
    </div>
  );
}
 
export default CountriesList;