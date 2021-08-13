import React from 'react';
import style from './index.module.css'

const CountrieByName = ({ countrieData }) => {

  const { name, flag } = countrieData;

  return (
    <div>
      <h1>{name}</h1>
      <img src={flag}/>
    </div>
  );
}
 
export default CountrieByName;