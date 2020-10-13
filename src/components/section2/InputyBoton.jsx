import React from 'react';

const InputyBoton = ({user, error, buttonAction, handleInputChange, onKeyUp}) => (
    <div className="formContainer">
        <h3 className="title"><strong>Ingresa el usuario de Github a continuación: </strong></h3>
        <input 
        type="text" 
        className="inputBusqueda" 
        value={user} 
        placeholder="Usuario de Github" 
        onChange ={event => handleInputChange(event.target.value)} />

    <button className="botonBusqueda" onClick={buttonAction} >Buscar</button>    
    <p className="errorText">{error}</p>


    </div>

)

export default InputyBoton;