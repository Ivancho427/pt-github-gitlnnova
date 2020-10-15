import React from "react";
import { Button, Form, Col, InputGroup, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

//  URL de la Api Fake donde se almacenaran los datos del formulario, se intentó con Cookies sin tener resultado.
const baseUrl =
  "https://api-pt-pt-github-gitlnnova.ivancho427.vercel.app/users";

// Function component para trabajar con Hooks
export default function Formulario() {  
  const [validated, setValidated] = useState(false);  
  const [datos, setDatos] = useState({
    name: "",
    last_name: "",
    cedula: "",
    date: "",
    email: "",
    usuario: "",
  });

  // Función para captura de datos del formulario
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Función para ejecutar el metodo Post
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

  // Función para validación del Formulario. 
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
      });
      event.target.reset(setValidated(false));
      return { datos: datos.name };
    }
  };

  return (
    <div>
      <div className="d-flex flex-md-row flex-column bg ">
        <div className="w-100 p-3 fondo">
          <h2 className="texto-formulario">Formulario</h2>
          <h4 className="exclusivo mt-2 mb-4">
            Exclusivo para el registro de candidatos:{" "}
          </h4>
          
          <Card id="card">
            <Form
              className="formulario mt-5"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              
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
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationCustomUsername"
                >
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
              <Button
                className="registrarse mb-3"
                id="boton"
                type="submit"
                onClick={() => enviarDatos()}
              >
                Registrarse
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
