import Employee from './Employee'
import { Link } from "react-router-dom";

const Employees = ({ employees }) => {
    return (
        <>
            {employees.map((employee) => (
                <Link to={`/Employee/${employee.id}`}>
                    <Employee key={employee.id}
                        employee={employee}
                        />
                </Link>
            ))}
        </>
    )
}

export default Employees