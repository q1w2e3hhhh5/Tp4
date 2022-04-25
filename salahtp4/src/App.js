import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Button from '../src/components/Button'
import Employee from './components/Employee';
import Employees from './components/Employees.js';

function App() {

  const [employees, setTask] = useState(
    [
      {
        id: 1,
        email: 'salah@gmail.com',
        fullName: 'Salah joj',
      },
      {
        id: 2,
        email: 'edine@gmail.com',
        fullName: 'edine bro',
      },
      {
        id: 3,
        email: 'raquib@Hotmail.com',
        fullName: 'raquib dude',
      },
    ]
  )


  const [clients] = useState(
    [
      {
        id: 1,
        email: 'bob@gmail.com',
        fullName: 'bob joe',
      },
      {
        id: 2,
        email: 'google@gmail.com',
        fullName: 'goo gle',
      },
      {
        id: 3,
        email: 'hersay@Hotmail.com',
        fullName: 'im learing dude',
      },
    ]
  )



  const onClick = () => {
    //change the array to the thing
    console.log("Change array display")
}

function onClickRedirectTo(){
  console.log("i wanna leave this place")
}



  return (
    <>
    <h1>Log in as a :</h1>
    <Button color='green' text='Employees' onClick={onClick} />
    <Button color='green' text='Clients' onClick={onClick} />
    <h1>Or</h1>
    <Button color='green' text='Sign up' onClick={onClick} />




    <div className='container'>
    <Employees employees={employees} onToggle={onClickRedirectTo} />
    </div>

    </>
  );
}

export default App;
