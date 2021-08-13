import React from 'react';
import style from './index.module.css'

const SearchCountrie = ({ searchCountrieData }) => {

  const { name, flag } = searchCountrieData
  

  return (
    <div>
      <h1>{name}</h1>
      <img src={flag} />
    </div>
  );
}
 
export default SearchCountrie;