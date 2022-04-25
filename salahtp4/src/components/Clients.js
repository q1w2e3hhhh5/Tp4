import Client from './Client'
const Clients = ({clients, onToggle }) => {
    return (
        <>
            {clients.map((client) => (
                <Client key={client.id}
                client={client} 
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Clients