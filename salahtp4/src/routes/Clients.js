import Button from '../../src/components/Button';
import '../App.css';
import { Link } from "react-router-dom";



export default function clients() {
    return (
        <>
            <div className='options'>
                <h2>clients</h2>
                <Button color='green' text='Mes Documents' />

                <Link to={`/Documents`}>
                    <Button color='green' text='Tout Les Documents De la Bibliothéque' />
                </Link>
            </div>
        </>


    );
}