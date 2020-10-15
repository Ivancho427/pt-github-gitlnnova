import React from "react";
import { Button, Form, Col, InputGroup, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
// import Cookies from 'js-cookie'
import GetUsers from './GetUsers'
import ModalMostrar from './ModalMostar'



// Se crea una constante y se pasa la URL de la Api Fake donde se almacenaran los datos del formulario
const baseUrl =
  "https://api-pt-pt-github-gitlnnova.ivancho427.vercel.app/users";

// Se trabaja con function Component para trabajar la validación del formulario con Hooks
export default function Formulario() {
  // Se crea este Hook para la validación y se inicializa el estado en false para que no muestre información
  const [validated, setValidated] = useState(false);
  // Se crea este Hook y se inicializa  el estado con un array de datos vacios
  const [datos, setDatos] = useState({
    name: "",
    last_name: "",
    cedula: "",
    date: "",
    email: "",
    usuario: "",
  });

  // Se crea esta función flecha con el objetivo que capture los datos digitados por el usuario en el input.
  // Y posterior a esto se cambia el estado por medio de la propagación para que el nuevo estado tenga los valores digitados.
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Se crea esta función con el fin de ejecutar con async y await la petición http.
  // Con la librería axios se realiza la peticón con metodo post y se utiliza para la promesa el then y catch.
  const enviarDatos = async () => {
    await axios
      .post(baseUrl, {
        ...datos,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Se crea esta función para la validación del formulario y se cambia el estado setValidate de false a true.
  // Además con la librería sweetAlert se cambia el estilo de alert para que tenga una mejor apariencia.
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      swal({
        title: "Registro realizado correctamente",
        icon: "success",
        button: "Aceptar",
        timer: "8000",
      })      
      event.target.reset(setValidated(false));
      return {datos: datos.name}
    }
   
  };

  
  return (
    
    <div> 
      {/* <ModalMostrar />   
    <GetUsers/> */}
    
    <div className="d-flex flex-md-row flex-column bg ">
      <div className="w-100 p-3 fondo">
        <h2 className="texto-formulario">Formulario</h2>
        <h4 className="exclusivo mt-2 mb-4">Exclusivo para el registro de candidatos: </h4>
        {/* Se crea el formulario con la ayuda de la libreria react-bootstrap.
        Al  Form se asigna la validación y se llama la función handleSubmit. */}
        <Card id="card">
        <Form
          className="formulario mt-5"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          {/* Se crean los Input solicitados en el ejercicio,
           con el respectivo name quien sirve para actualizar el estado y validar el formulario con la función handleInputChange. */}
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Nombres: </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre *"
                defaultValue=""
                name="name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese el nombre.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Apellidos: </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Apellidos *"
                defaultValue=""
                name="last_name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese los apellidos.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
              <Form.Label>Cédula: </Form.Label>
              <InputGroup>
                <InputGroup.Prepend></InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Cédula *"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="cedula"
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese la cédula.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Fecha de Nacimiento *"
                required
                name="date"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese la fecha de nacimiento.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electrónico *"
                required
                name="email"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese el correo electrónico.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Usuario Github</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuario Github *"
                required
                name="usuario"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese el usuario de Github.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Check
              required
              label="Acepta los términos y condiciones"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button className="registrarse mb-3" id="boton" type="submit" onClick={() => enviarDatos()}>
            Registrarse
          </Button>
        </Form>
        </Card>
      </div>
    </div>

    </div>
  );
}
