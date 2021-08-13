import React from 'react';
import OneCountrie from '../countries/OneCountrie';

const ContinentList = ({ countriesContinent, setCountrieData }) => {
  return (
    <div>
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