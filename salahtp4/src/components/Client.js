const Client = ({ client, onToggle }) => {
    return (
        <div className='client'
            onClick={() => onToggle(client.id)}>
            <p>{client.fullName}</p>
            <h3>{client.email} </h3>
        </div>
    )
}
export default Client




