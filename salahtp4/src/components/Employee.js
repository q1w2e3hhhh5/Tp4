import { Link } from "react-router-dom";

const Employee = ({ employee, onToggle }) => {
    return (
        <Link to="/Employee">
            <div className='employee'
                onClick={() => onToggle(employee.id)}>
                <p>{employee.fullName}</p>
                <h3>{employee.email} </h3>
            </div>
        </Link>
    )
}
export default Employee
