import React  from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from './index.module.css'

const OneCountrie = ({ countrie, setCountrieData }) => {

  const { name, flag, region, subregion, capital, population } = countrie;
  
  const history = useHistory()

  const redireccion = (name) => {
    setCountrieData(countrie)
    history.push(`/viewcountrie/${name}`)
  }

  return (
    <div className={style.countrie}>
      <div className={style.countrieImage}>
        <a onClick={() => redireccion(name)} > <img src={flag}/> </a>
      </div>
      <div className={style.countrieData}>
        <h2>Name: <span>{name}</span></h2>
        <h2> Region: <span>{region}</span> </h2>
        <h2> Capital: <span>{capital}</span> </h2>
        <h2> Population: <span>{(population / 1000000).toFixed(2)} Millions </span> </h2>
      </div>
    </div>
  );
}
 
export default OneCountrie;