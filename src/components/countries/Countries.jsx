import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesList from '../countries/CountriesList';
import style from './index.module.css'

const Countries = ({ setCountrieData }) => {

  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const allCountriesAPI = async () => {
      const url = 'https://restcountries.eu/rest/v2/all'
      const result = await axios.get(url)
      setAllCountries(result.data)
    }
    allCountriesAPI()
  }, [])

  return (
    <div>
      <CountriesList allCountries={allCountries} setCountrieData={setCountrieData} />
    </div>
  );
}
 
export default Countries;