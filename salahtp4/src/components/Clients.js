import Client from './Client'
import { Link } from "react-router-dom";

const Clients = ({ clients }) => {
    return (
        <>
            {clients.map((client) => (
                <Link to={`/Client/${client.id}`}>
                    <Client key={client.id}
                        client={client} />
                </Link>
            ))}
        </>
    )
}

export default Clients