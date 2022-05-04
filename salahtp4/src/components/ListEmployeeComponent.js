import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from "react-router-dom";
import Button from './Button';


class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }


    render() {
        return (
            <div>
                <h2>Employee List</h2>
                <div>
                    <table>

                        <thead>
                            <tr>
                                <th> Employee Full name</th>
                                <th> Employee Email</th>
                                <th> Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.fullName} </td>
                                            <td> {employee.email}</td>
                                            <td>
                                                <Link to={`/Employee/${employee.id}`}>
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

export default ListEmployeeComponent