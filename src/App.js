import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Continents from './components/Continents';
import Countries from './components/countries/Countries';
import CountriesByContinent from './components/countriesByContinents/CountriesByContinent';
import CountrieByName from './components/countriesByName/CountrieByName';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Continents />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Countries} />
            <Route path='/:continente' component={CountriesByContinent} />
            <Route path='/:name' component={CountrieByName} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
