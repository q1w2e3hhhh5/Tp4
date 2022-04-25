const Client = ({client, onToggle}) => {
    return (
        <div className='client' 
             onClick={() => onToggle(client.id)}>
            <h3>{client.email} </h3>
            <p>{client.fullName}</p>
        </div>
    )
}
export default Client
