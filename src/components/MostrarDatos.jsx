import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'



function MostrarDatos() {

    const [info , setInfo] = useState({
        name: "",
        last_name: "",
        cedula: "",
        date: "",
        email: "",
        usuario: "" 
    })





    return (
        <div>
            {/* <h1>Hola Mundo </h1> */}
        </div>
    )
}

export default MostrarDatos
