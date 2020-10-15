import React from 'react';


// Se reciben los props por medio de la destructuración para ejecutar del input y del boton los cambios esperados.
const InputyBoton = ({user, error, buttonAction, handleInputChange}) => (
    <div className="formContainer">
        
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