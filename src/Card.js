import React from 'react';
import './Card.css';
const Card = ({name,email,id}) =>{
    // const {name,email,id}=props;
    return (
        <div className= " tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?size=200x200`} alt="none"/>
        <h1>{name}</h1>
        <p><em  style={{ color:`red` }}>{email}</em></p>
        
        </div>
    );
}

export default Card;