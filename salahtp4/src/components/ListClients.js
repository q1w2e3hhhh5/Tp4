import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import '../App.css'
import Button from './Button';
import { Link } from "react-router-dom";

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
            <>
                <div className='options'>
                    <div class="container">
                        <h2>Clients List</h2>
                        <ul class="responsive-table">
                            <li class="table-header">
                                <div class="col col-1">Full Name</div>
                                <div class="col col-2">Email</div>
                                <div class="col col-2">Action</div>
                            </li>
                            <div>
                                {this.state.clients.map(
                                    client => <li className='table-row' key={client.id}>
                                        <div class="col col-1" > {client.fullName} </div>
                                        <div class="col col-2" >{client.email}</div>
                                        <div class="col col-3" >delete/update/getListOfBorrows</div>
                                    </li>
                                )}
                            </div>
                        </ul>
                    </div>
                    <Link to={`/CreateClient`}>
                        <Button color='green' text='Add Client' onClick={this.addClient} />
                    </Link>

                </div>
            </>
        )
    }
}
/* must add delete client and create client */

export default ListClientComponent