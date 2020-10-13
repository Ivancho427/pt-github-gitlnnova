import React from 'react';

const Form = ({user, error, buttonAction, handleInputChange}) => (
    <div className="formContainer">
        <input 
        type="text" 
        className="userInput" 
        value={user} 
        placeholder="Usuario de Github" 
        onChange ={event => handleInputChange(event.target.value)} />

    <button className="searchButton" onClick={buttonAction} >Buscar</button>    
    <p className="errorText">{error}</p>
    </div>

)

export default Form;