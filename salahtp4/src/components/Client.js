import { Link } from "react-router-dom";

const Client = ({ client, onToggle }) => {
    return (
        <Link to="/Client">
            <div className='client'
                onClick={() => onToggle(client.id)}>
                <p>{client.fullName}</p>
                <h3>{client.email} </h3>
            </div>
        </Link>
    )
}
export default Client
