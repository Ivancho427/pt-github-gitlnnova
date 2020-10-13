import React, { Component } from 'react'
import Form from './Form';
import axios from 'axios'

export default class ButtonInput extends Component {
    state = {
        user: "",
        repos: [],
        error: "",
    };

    handleInputChange = user => {
        this.setState({ user: user });
    }   

    searchUser = async () => {        
        const { user } = this.state;

        try {
            const { data: repos } = await  axios.get(
                `https://api.github.com/users/${user}/repos`
                );
                console.log(repos)       

            this.setState({ repos, error:"" })    

        } catch (error) {
            this.setState({
                error: 'Usuario no encontrado'
            })
        }
    };

    render() {
        const { user, repos, error} = this.state;
        
        return (
            <div>
                <h2 className="title">Ingresa el usuario de Github a continuación</h2>
                <Form  handleInputChange={this.handleInputChange}
                user={user}
                error={error}
                buttonAction={this.searchUser}/>

                <div className="table-responsive-lg">

                    <table className="table" >
                        <thead >
                            <tr className="tabla-tr" >
                                <th>Lenguaje</th>
                                <th>Branch por defecto</th>
                                <th>Url Git</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        repos.map((repo,i)=> ( <tr key={i}>
                            <td>{repo.language}</td>
                            <td>{repo.default_branch}</td>
                            <td><a href={repo.html_url} target="_blank" rel="noopener noreferrer">Enlace al repositorio</a></td>
                            <td>{repo.name}</td>
                            <td>{repo.description}</td>
                        </tr>
                                                  
                               
                        ))
                    }
                        </tbody>
                    </table>
                    

                </div>


            </div>
        )
    }
}

