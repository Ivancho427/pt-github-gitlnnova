import React, { Component } from "react";
import InputyBoton from "./InputyBoton";
import axios from "axios";

// Se crea una class Component, se crea el constructor y el super. 
// Además el estado inicial con arreglos vacios para inicializar el estado.
export default class TablaInfo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      repos: [],
      error: "",
      search: "",
      // next:"",
      // previous:""
      busqueda: "",
    };
  }

// Se crea el metodo llamadado searchUser quien es la función, se trabaja con async y await,
// se asigna la constante user por destructuración y se asigna el estado para que cambie cuando se llame la función
// para catchear se usa el try catch, para hacer la petición http se usó la libreria axios y el metodo get a la url de la api de github
// para traer los repositorios se trabajó con comillas invertidas y se asignó user entre llaves para forma dinámica
  searchUser = async () => {
    const { user } = this.state;

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos?page=2&per_page=5; rel="next`
      );
      console.log(repos);

      this.setState({ repos, error: "" });
    } catch (error) {
      this.setState({
        error: "Usuario no encontrado",
      });
    }
  };

  // Se crea el metodo y se llama la función handleInputChange con una función flecha y parámetro user,
  //  con el fin que capture el usuario en el input y posterior a esto muestre la información en la tabla.
  handleInputChange = (user) => {
    this.setState({ user: user });
  }; 
 
  // Se trato de realizar el filtro de la siguiente manera, sin obtener resultado

  // filtrarRepositorios = (e) => {
  //   let filtro = document.querySelector("#filtro").value.toLowerCase();
  //   let resultado = this.state.user.filter(function (repo) {
  //     let nombreMin = repo.name.tolowerCase();
  //     return nombreMin.indexOf(filtro) >= 1;
  //   });
  //   console.log(resultado);
  // };

  // Por ende y según documentación encontrada  se recurrió a realizar el filtro con los siguientes métodos.
  // Sin embargo, es importante aclarar que el filtro no funciona a partir de la tercera letra.
  // Además, debe ser con el nombre completo ya que no me tomo las funciones de JS toLowerCase y toUpperCase para letras mayusculas.

  onChange = async e => {    
    await this.setState({busqueda : e.target.value})
    console.log(this.state.busqueda)
    this.filtrarElementos();
  }

  filtrarElementos=()=>{
    let search = this.state.repos.filter(repo => {
      if(repo.name.toString().includes(this.state.busqueda)){
        return repo;
      }
    });
    this.setState({repos: search})
  }
  
  componentDidMount(){
    this.setState({repos: this.state.repos})
  }

  // Se aplica el renderizado y por destructuración se pasa las constantes
  render() {
    const { user, repos, error } = this.state;

    return (
      <div>
        <h3 className="tablas">Tabla # 2</h3>
        <h3 className="title"><strong>Ingresa el usuario de Github a continuación para observar los 5 repositorios siguientes: </strong></h3>
        {/* Se asignan props para pasarlos al componente InputyBoton */}
        <InputyBoton
          handleInputChange={this.handleInputChange}
          user={user}
          error={error}
          buttonAction={this.searchUser}
          repos
        />
        <label className="title input2"><strong>Para filtrar, ingrese el nombre exacto del repositorio: </strong> </label>
        <input
          type="text"
          id="filtro"          
          placeholder="Filtrar por nombre"
          name="busqueda"
          value={this.state.busqueda}
          onChange={this.onChange}
          className="inputFiltro"
        ></input>

        <div className="table-responsive">
          <table className="table">
            <thead className="thead">
              <tr className="tabla-tr">
                <th>Lenguaje</th>
                <th>Branch por defecto</th>
                <th>Url Git</th>
                <th>Enlace al repositorio</th>
                <th>Nombre del repositorio</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo, i) => (
                <tr key={i}>
                  <td>{repo.language}</td>
                  <td>{repo.default_branch}</td>
                  <td>{repo.git_url}</td>
                  <td>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enlace al repositorio
                    </a>
                  </td>
                  <td>{repo.name}</td>
                  <td>{repo.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
