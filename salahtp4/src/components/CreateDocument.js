import React, { Component } from 'react';
import Button from './Button';
import { Link } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import '../App.css';

class CreateDocument extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            email: "",
            password: ""
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveClient = this.saveClient.bind(this);
    }


    changeFullNameHandler = (event) => {
        this.setState({ fullName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    saveClient = (e) => {
        e.preventDefault();
        let client = { fullName: this.state.fullName, email: this.state.email, password: this.state.password };
        console.log("client=>" + JSON.stringify(client))

        EmployeeService.createClient(client).then(res => {
            this.props.history.push("/Clients");
        });

        alert("Le document à été Crée")

    }

    render() {
        return (
            <>
                <div className='options'>
                    <div className='block'>
                        <div className='container'>
                            <div>
                                <h3>Ajouter livre</h3>
                                <form>
                                    <div className=''>
                                        <label>Full name:</label>
                                        <input placeholder='name' name='fullName'
                                            value={this.state.fullName} onChange={this.changeFullNameHandler} />
                                    </div>
                                    <div className=''>
                                        <label>Email:</label>
                                        <input placeholder='email' name='email'
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className=''>
                                        <label>Password:</label>
                                        <input placeholder='***' name='password'
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                </form>
                                <Button color='green' text='Save' onClick={this.saveBook} />
                                <Link to={`/Clients`}><Button color='red' text='Annuler' /></Link>

                            </div>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='container'>
                            <div>
                                <h3>Ajouter Cd</h3>
                                <form>
                                    <div className=''>
                                        <label>Full name:</label>
                                        <input placeholder='name' name='fullName'
                                            value={this.state.fullName} onChange={this.changeFullNameHandler} />
                                    </div>
                                    <div className=''>
                                        <label>Email:</label>
                                        <input placeholder='email' name='email'
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className=''>
                                        <label>Password:</label>
                                        <input placeholder='***' name='password'
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                </form>
                                <Button color='green' text='Save' onClick={this.saveCd} />
                                <Link to={`/Clients`}><Button color='red' text='Annuler' /></Link>

                            </div>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='container'>
                            <div>
                                <h3>Ajouter Dvd</h3>
                                <form>
                                    <div className=''>
                                        <label>Full name:</label>
                                        <input placeholder='name' name='fullName'
                                            value={this.state.fullName} onChange={this.changeFullNameHandler} />
                                    </div>
                                    <div className=''>
                                        <label>Email:</label>
                                        <input placeholder='email' name='email'
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className=''>
                                        <label>Password:</label>
                                        <input placeholder='***' name='password'
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                </form>
                                <Button color='green' text='Save' onClick={this.saveDvd} />
                                <Link to={`/Clients`}><Button color='red' text='Annuler' /></Link>

                            </div>
                        </div >
                    </div >
                </div>
            </>
        )
    }
}


export default CreateDocument