import axios from 'axios';

const CLIENTS_API_BASE_URL = "http://localhost:8085/api/v1/Clients";
const EMPLOYEES_API_BASE_URL = "http://localhost:8085/api/v1/Employees";
const DOCUMENTS_API_BASE_URL = "http://localhost:8085/api/v1/Documents";

class EmployeeService {

    getClients() {
        return axios.get(CLIENTS_API_BASE_URL)
    }

    getEmployees() {
        return axios.get(EMPLOYEES_API_BASE_URL)
    }


    createClient(client) {
        return axios.post(CLIENTS_API_BASE_URL, client);
    }

    createBook(book){
        return axios.post(DOCUMENTS_API_BASE_URL, book)
    }

    getDocuments() {
        return axios.get(DOCUMENTS_API_BASE_URL);
    }



}

export default new EmployeeService()