import React from 'react';
import style from './index.module.css'

const CountrieByName = ({ countrieData }) => {

  const { name, flag, capital, region, subregion, population, area, currencies } = countrieData;

  return (
    <div className={style.container}>
      <div className={style.principal}>
        <h1>{name}</h1>
        <img src={flag}/>
      </div>
      <div className={style.info}>
        <h2> Region: <span>{region}</span> </h2>
        <h2> Sub-Region: <span>{subregion}</span> </h2>
        <h2> Capital: <span>{capital}</span> </h2>
        <h2> Territory area: <span>{(area / 1000000).toFixed(2)} Millions Km2</span> </h2>
        <h2> Population: <span>{(population / 1000000).toFixed(2)} Millions </span> </h2>
        <h2> National currency: <span>{currencies[0].name}</span> </h2>
      </div>
    </div>
  );
}
 
export default CountrieByName;