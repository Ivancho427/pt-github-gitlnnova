import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
 
  Form,
  
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";


class ModalMostrar extends React.Component {
  state = {
    abierto: false,
  };

  abrirModal=() => {
      this.setState({abierto: !this.state.abierto})
  }

  render() {
    return (
      <>
        <div className="principal">
        
            
        <h1 className="info-funcion mt-1">Para saber como funciona la aplicación web</h1>
          <div className="secundario">
          <label className="presioneboton mt-3 mr-4">Presione el siguiente boton: </label>
            <Button className="boton_mod mt-2" id="boton-modal" onClick={this.abrirModal}>Guia de uso</Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto}>
          <ModalHeader className="justify-content-center" id="header-modal">Sigua los siguientes pasos: </ModalHeader>
          <ModalBody>
          <Form
          className="mt-5"
        >
            </Form>
              <ol id="lista-modal">
                <li className="mb-3">Registre el candidato en el formulario, diligencie todos los campos.</li>
                <li className="mb-3">Actualice el navegador, notará que en la parte superior le aparecerán los datos registrados.</li>
                <li className="mb-3">En la parte inferior podrá consultar los repositorios, aparecerán dos tablas, esto con el fin de ver solo 5 repositorios.</li>
                <ul>
                  <li className="mb-2">En la tabla #1 ingrese el usuario de Github del candidato en el campo indicado y al dar click en buscar encontrará la información requerida.</li>
                  <li className="mb-2">Si desea ver más repositorios, vaya a la tabla #2 e ingrese de nuevo el usuario de Github.</li>
                  <li className="mb-3">Para utilizar el filtro, escriba el nombre exacto del repositorio.</li>
                </ul>
                <li >Por último si desea ver los repositorios en la página de Github de click en "Enlace al repositorio".</li>
              </ol>
              
            
          </ModalBody>
            
            <Button id="boton-cerrar"  onClick={this.abrirModal}>Cerrar</Button>
          
        </Modal>
      </>
    );
  }
}

export default ModalMostrar;