import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';

const Header = ({ setSearchCountrie }) => {

  const [search, setSearch] = useState('');
  const history = useHistory();

  const searchByCountrie = e => {
    e.preventDefault()
    setSearchCountrie(search)
    history.push(`/search/${search}`)
  } 

  return (
    <div>
      <div>
        <Link to='/'> <h1>Countries App</h1> </Link>
      </div>
      <form onSubmit={searchByCountrie}>
        <input 
          type='text'
          placeholder='Find a country'
          name='countrie'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type='submit'
        > Search </button>
      </form>
    </div>
  );
}
 
export default Header;