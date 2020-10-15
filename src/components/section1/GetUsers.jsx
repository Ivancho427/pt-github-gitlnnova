import React, { useState, useEffect} from 'react';
import { Card } from "react-bootstrap";


export default function GetUsers() {
    const [datos, setDatos] = useState([{
        name: "",
        last_name: "",
        cedula: "",
        date: "",
        email: "",
        usuario: "",
    }]);

    useEffect(async() => {
        let users = [];
        fetch(`https://api-pt-pt-github-gitlnnova.ivancho427.vercel.app/users/`)
        .then( respuesta => respuesta.json() )
        .then( users => {
            console.log(users);
            setDatos(users)
        })
        
    }, [])
    
   

    return (
        <div>
            
                {datos.map( ( repo, i) => {
                    return <Card id="card-usuario" key={i}>                        
                                               
                        <h3 className="mt-4 mb-4">Información del candidato:</h3>  
                        <h5>Nombre Completo: {repo.name} {repo.last_name}</h5>                       
                        <h5>CC: {repo.cedula}</h5>
                        <h5>Fecha de Nacimiento: {repo.date}</h5>
                        <h5>Correo: {repo.email}</h5>
                        <h5>Usuario Github:{repo.usuario}</h5>

                          </Card>

                 }
                )}
            
        </div>
    )
}


