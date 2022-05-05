import axios from 'axios';

const CLIENTS_API_BASE_URL = "http://localhost:8085/api/v1/Clients";
const EMPLOYEES_API_BASE_URL = "http://localhost:8085/api/v1/Employees";

class EmployeeService {

    getClients() {
        return axios.get(CLIENTS_API_BASE_URL)
    }

    getEmployees(){
        return axios.get(EMPLOYEES_API_BASE_URL)
    }


    createClient(client){
        return axios.post(CLIENTS_API_BASE_URL,client);
    }


}

export default new EmployeeService()