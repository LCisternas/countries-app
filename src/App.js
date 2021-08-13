import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Continents from './components/Continents';
import Countries from './components/countries/Countries';
import CountriesByContinent from './components/countriesByContinents/CountriesByContinent';
import CountrieByName from './components/countriesByName/CountrieByName';
import SearchCountrie from './components/searchCountrie/SearchCountrie';

function App() {

  const [countrieData, setCountrieData] = useState([]);
  const [searchCountrie, setSearchCountrie] = useState('');
  const [searchCountrieData, setSearchCountrieData] = useState([]);
  const [continent, setContinent] = useState('');
  const [countriesContinent, setCountriesContinent] = useState([]);

  useEffect(() => {
    if(searchCountrie !== '') {
      const consultAPI = async () => {
        const url = `https://restcountries.eu/rest/v2/name/${searchCountrie}`
        const result = await axios.get(url)
        setSearchCountrieData(result.data[0])
      }
      consultAPI()
    }
  }, [searchCountrie])
  useEffect(() => {
    if(continent !== '') {
      const consultAPI = async () => {
        const url = `https://restcountries.eu/rest/v2/region/${continent}`
        const result = await axios.get(url)
        setCountriesContinent(result.data)
      }
      consultAPI()
    }
  }, [continent])

  return (
    <BrowserRouter>
      <div className='main'>
        <div className='header'>
          <Header setSearchCountrie={setSearchCountrie} />
        </div>
        <div className='continents'>
          <Continents setContinent={setContinent} />
        </div>
        <div className='views'>
          <Switch>
            <Route exact path='/' render={() => <Countries setCountrieData={setCountrieData} />} />
            <Route exact path='/continent/:continent' render={() => <CountriesByContinent countriesContinent={countriesContinent} continent={continent} setCountrieData={setCountrieData} />} />
            <Route exact path={`/viewcountrie/:name`} render={() => <CountrieByName countrieData={countrieData} />} />
            <Route exact path={`/search/:name`} render={() => <SearchCountrie searchCountrieData={searchCountrieData} />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
