import { useState } from 'react'
import './App.css';
import Button from './components/Button'
import { Link } from "react-router-dom";
import ListClientComponent from './components/ListClientComponent';

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

  return (
    <>
      <Link to={`/Clients`}>
        <Button color='green' text='List Clients' />
      </Link>
      <ListClientComponent/>
    </>
  );
}
export default App;