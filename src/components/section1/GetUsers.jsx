import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

// Function component para trabajar con Hooks
export default function GetUsers() {
  const [datos, setDatos] = useState([
    {
      name: "",
      last_name: "",
      cedula: "",
      date: "",
      email: "",
      usuario: "",
    },
  ]);

  // useEffect para ejecutar el metodo Get a la api Fake.
  useEffect(() => {
    fetch(`https://api-pt-pt-github-gitlnnova.ivancho427.vercel.app/users/`)
      .then((respuesta) => respuesta.json())
      .then((users) => {
        // console.log(users);
        setDatos(users);
      });
  }, []);

  // Se recorre el arreglo y se pinta en el HTML.
  return (
    <div>
      {datos.map((repo, i) => {
        return (
          <Card id="card-usuario" key={i}>
            <h4 className="tabla-user mt-4 mb-4">Información del candidato:</h4>
            <h5 className="info-user">
              Nombre Completo: {repo.name} {repo.last_name}
            </h5>
            <h5 className="info-user">CC: {repo.cedula}</h5>
            <h5 className="info-user">Fecha de Nacimiento: {repo.date}</h5>
            <h5 className="info-user">Correo: {repo.email}</h5>
            <h5 className="info-user">Usuario Github:{repo.usuario}</h5>
          </Card>
        );
      })}
    </div>
  );
}
