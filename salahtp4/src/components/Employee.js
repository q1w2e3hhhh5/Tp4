const Employee = ({ employee, onToggle }) => {
    return (
        <div className='employee'
            onClick={() => onToggle(employee.id)}>
            <p>{employee.fullName}</p>
            <h3>{employee.email} </h3>
        </div>
    )
}
export default Employee
