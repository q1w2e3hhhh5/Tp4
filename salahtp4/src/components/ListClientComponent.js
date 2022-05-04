import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from "react-router-dom";
import Button from './Button';

class ListClientComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        EmployeeService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2>Clients List</h2>

                <div>
                    <table>

                        <thead>
                            <tr>
                                <th> Client Full name</th>
                                <th> Client Email</th>
                                <th> Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    client =>
                                        <tr key={client.id}>
                                            <td> {client.fullName} </td>
                                            <td> {client.email}</td>
                                            <td>
                                            <Link to={`/Client/${client.id}`}>
                                            <Button color='green' text='Log in' />
                                            </Link>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>)

    }

}


export default ListClientComponent