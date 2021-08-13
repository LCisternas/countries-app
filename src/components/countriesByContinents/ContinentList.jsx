import React from 'react';
import OneCountrie from '../countries/OneCountrie';
import style from './index.module.css'

const ContinentList = ({ countriesContinent, setCountrieData }) => {
  return (
    <div className={style.container}>
      {countriesContinent.map(countrie => (
        <OneCountrie 
          key={countrie.numericCode}
          countrie={countrie}
          setCountrieData={setCountrieData}
        />
      ))}
    </div>
  );
}
 
export default ContinentList;