import React  from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from './index.module.css'

const OneCountrie = ({ countrie, setCountrieData }) => {

  const { name, flag } = countrie;
  
  const history = useHistory()

  const redireccion = (name) => {
    setCountrieData(countrie)
    history.push(`/viewcountrie/${name}`)
  }

  return (
    <div className='oneCountrie-container'>
      <div className='title'>
        <h1>{name}</h1>
      </div>
      <div className='image'>
        <a onClick={() => redireccion(name)} > <img src={flag}/> </a>
      </div>
    </div>
  );
}
 
export default OneCountrie;