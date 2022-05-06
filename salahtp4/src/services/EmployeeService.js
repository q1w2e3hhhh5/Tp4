import axios from 'axios';

const CLIENTS_API_BASE_URL = "http://localhost:8085/api/v1/Clients";
const EMPLOYEES_API_BASE_URL = "http://localhost:8085/api/v1/Employees";
const BOOK_API_BASE_URL = "http://localhost:8085/api/v1/Book";
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

    createBook(book) {
        return axios.post(BOOK_API_BASE_URL, book)
    }

    createDvd(dvd) {
        return axios.post(BOOK_API_BASE_URL, dvd)
    }

    createCd(cd) {
        return axios.post(BOOK_API_BASE_URL, cd)
    }

    getDocuments() {
        return axios.get(DOCUMENTS_API_BASE_URL);
    }
}

export default new EmployeeService()