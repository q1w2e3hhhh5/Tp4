import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Button from '../src/components/Button'
import Employee from './components/Employee';
import Employees from './components/Employees.js';
import Clients from './components/Clients';

function App() {

  const [employees] = useState(
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
        id: 4,
        email: 'bob@gmail.com',
        fullName: 'bob joe',
      },
      {
        id: 5,
        email: 'google@gmail.com',
        fullName: 'goo gle',
      },
      {
        id: 6,
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
    <Button color='green' text='Sign up' onClick={onClickRedirectTo} />

    <div className='container'>
      <h2>List of C/E</h2>
    {/* <thestuff /> */}
    </div>




    <div className='container'>
    <Employees employees={employees} onToggle={onClickRedirectTo} />
    </div>


    <div className='container'>
    <Clients clients={clients} onToggle={onClickRedirectTo} />
    </div>

    </>
  );
}

export default App;
