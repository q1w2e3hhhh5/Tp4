import Button from '../../src/components/Button';
import '../App.css';



export default function employees() {
    return (
        <>
        <div className='options'>
        <h2>employee</h2>
        <Button color='green' text='List of Clients' />
        <Button color='green' text='Search Client' />
        <Button color='green' text='Search Clients Borrows' />
        <Button color='green' text='Create Document' />
        <Button color='green' text='List of borrows' />
        <Button color='green' text='Search Documents' />
        <Button color='green' text='All documents' />
        </div>
        </>
        
    );
}