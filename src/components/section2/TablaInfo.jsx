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
      search:""
      // next:"",
      // previous:""
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

  searchRepo = repo => {
      const { search } = this.state;
      var code = repo.code.toLowerCase()

      if (search !== "" && repo.name.indexOf( search ) === -1) {
          return null
      }
  }

  onKeyUp = e => {
      this.setState({ search: e.target.value })
  }

//   filtrarRepositorios = (e) => {
//     let filtro = document.querySelector("#filtro").value.toLowerCase();
//     let resultado = user.filter(function (repo) {
//       let nombreMin = repo.name.tolowerCase();
//       return nombreMin.indexOf(filtro) >= 0;
//     });
//     console.log(resultado);
//   };

  render() {
    const { user, repos, error } = this.state;
    
    return (
      <div>
        <h2 className="title">Ingresa el usuario de Github a continuación</h2>
        <InputyBoton
          handleInputChange={this.handleInputChange}
          user={user}
          error={error}
          buttonAction={this.searchUser}
        />
        {/* <button>Anterior</button>    
        <button>Siguiente</button>   */}
        <input
          type="text"
          id="filtro"
          onKeyUp={this.onKeyUp}
          placeholder="Nombre del repositorio"
        ></input>
        <div className="table-responsive-lg">
          <table className="table">
            <thead>
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
