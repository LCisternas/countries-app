import React from 'react';
import OneCountrie from './OneCountrie';
import style from './index.module.css'

const CountriesList = ({ allCountries }) => {


  return (
    <div>
      {allCountries.map(countrie => (
        <OneCountrie 
          key={countrie.numericCode}
          countrie={countrie}
        />
      ))}
    </div>
  );
}
 
export default CountriesList;