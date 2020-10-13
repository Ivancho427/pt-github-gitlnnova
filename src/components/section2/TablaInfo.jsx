import React, { Component } from "react";
import InputyBoton from "./InputyBoton";
import axios from "axios";

export default class ButtonInput extends Component {
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

  handleInputChange = (user) => {
    this.setState({ user: user });
  };

  searchUser = async () => {
    const { user } = this.state;

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      console.log(repos);

      this.setState({ repos, error: "" });
    } catch (error) {
      this.setState({
        error: "Usuario no encontrado",
      });
    }
  };


  // onKeyUp = e => {
  //     this.setState({ search: e.target.value })
  // }

  // filtrarRepositorios = (e) => {

  //   let filtro = document.querySelector("#filtro").value.toLowerCase();
  //   let resultado = this.state.user.filter(function (repo) {
  //     let nombreMin = repo.name.tolowerCase();
  //     return nombreMin.indexOf(filtro) >= 1;
  //   });
  //   console.log(resultado);
  // };

  onChange = async e => {
    // e.persist();
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

  render() {
    const { user, repos, error } = this.state;

    return (
      <div>
        
        <InputyBoton
          handleInputChange={this.handleInputChange}
          user={user}
          error={error}
          buttonAction={this.searchUser}
          repos
        />
        <label className="title input2"><strong>Ingrese el nombre exacto del repositorio en el siguiente campo: </strong> </label>
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
