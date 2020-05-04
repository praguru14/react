import React from 'react';
// import App from './App';
const SearchBox = ({SearchChange}) =>{

    return(
        <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Avengers Search" onChange={SearchChange}/>


        </div>
    );
}

export default SearchBox;