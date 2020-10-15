import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from "@fortawesome/free-solid-svg-icons";

// Función flecha, se trabaja con props y destructuración.
const InputyBoton = ({ user, error, buttonAction, handleInputChange }) => (
  <div className="formContainer">
    
    <input
      type="text"
      className="inputBusqueda"
      value={user}
      placeholder="Usuario de Github" 
      onChange={(event) => handleInputChange(event.target.value)}
    />
    <FontAwesomeIcon className="icon"
    icon={faSearch}
    style={{ color: "#0F362D", fontSize: "20" }}
  />
 
    <button className="botonBusqueda" onClick={buttonAction}>
      Buscar
    </button>
    <p className="errorText">{error}</p>
  </div>
);

export default InputyBoton;
