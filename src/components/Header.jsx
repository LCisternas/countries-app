import React from 'react';

const Header = () => {
  return (
    <div>
      <div>
        <h1>Countries</h1>
      </div>
      <form>
        <input 
          type='text'
          placeholder='Find a country'
        />
        <button
          type='submit'
        > Search </button>
      </form>
    </div>
  );
}
 
export default Header;