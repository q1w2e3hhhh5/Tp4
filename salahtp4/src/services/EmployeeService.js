import axios from 'axios';

const CLIENTS_API_BASE_URL = "http://localhost:8085/api/v1/Clients";

class EmployeeService {

    getClients() {
        return axios.get(CLIENTS_API_BASE_URL)
    }
}

export default new EmployeeService()