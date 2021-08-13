import React from 'react';
import { useHistory } from 'react-router-dom';

const Continents = ({ setContinent }) => {

  const history = useHistory()
  
   const selectContinent = (continent) => {
     setContinent(continent)
     history.push(`/continent/${continent}`)
   }

  return (
    <div className='continents-container'>
      <button className='btn-continent' onClick={() => selectContinent('Americas')} >America</button>
      <button className='btn-continent' onClick={() => selectContinent('Europe')} >Europe</button>
      <button className='btn-continent' onClick={() => selectContinent('Asia')} >Asia</button>
      <button className='btn-continent' onClick={() => selectContinent('Africa')} >Africa</button>
      <button className='btn-continent' onClick={() => selectContinent('Oceania')} >Oceania</button>
    </div>
  );
}
 
export default Continents;