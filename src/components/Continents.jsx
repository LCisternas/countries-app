import React from 'react';
import { useHistory } from 'react-router-dom';

const Continents = ({ setContinent }) => {

  const history = useHistory()
  
   const selectContinent = (continent) => {
     setContinent(continent)
     history.push(`/continent/${continent}`)
   }

  return (
    <div>
      <button onClick={() => selectContinent('Americas')} >America</button>
      <button onClick={() => selectContinent('Europe')} >Europe</button>
      <button onClick={() => selectContinent('Asia')} >Asia</button>
      <button onClick={() => selectContinent('Africa')} >Africa</button>
      <button onClick={() => selectContinent('Oceania')} >Oceania</button>
    </div>
  );
}
 
export default Continents;