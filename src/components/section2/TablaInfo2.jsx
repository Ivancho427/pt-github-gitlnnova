import React, { Component } from "react";
import InputyBoton from "./InputyBoton";
import axios from "axios";

// Class Component, se crea este componente igual a TablaInfo1 ya que se intentó realizar la paginación sin resultado.
export default class TablaInfo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      repos: [],
      error: "",
      search: "",      
      busqueda: "",
    };
  }

  // Función para ejecutar el metodo Get a la Api de Github, para extraer datos dinámicos.
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

   // Función para capturar el usuario ingresado en el Input.
  handleInputChange = (user) => {
    this.setState({ user: user });
  }; 
 
  onChange = async (e) => {    
    await this.setState({busqueda : e.target.value})
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
