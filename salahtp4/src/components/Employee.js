const Employee = ({employee, onToggle}) => {
    return (
        <div className='employee' 
             onClick={() => onToggle(employee.id)}>
            <h3>{employee.email} </h3>
            <p>{employee.fullName}</p>
        </div>
    )
}
export default Employee
