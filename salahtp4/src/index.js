import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Employees from "./routes/Employees";
import Clients from "./routes/Clients";
import ListClientComponent from './components/ListClientComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateClient from './components/CreateClient';
import ListClients from './components/ListClients';
import ListDocumentsForClients from './components/ListDocumentsForClients';
import ListDocumentsForEmployees from './components/ListDocumentsForEmployees';
import CreateBook from './components/CreateBook';
import CreateDvd from './components/CreateDvd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="Employee/*" element={<Employees />} />
        <Route path="Client/*" element={<Clients />} />
        <Route path="Clients" element={<ListClientComponent />} />
        <Route path="Employees" element={<ListEmployeeComponent />} />
        <Route path="CreateClient" element={<CreateClient />} />
        <Route path="ClientsWLogin" element={<ListClients />} />
        <Route path="DocumentsForClient" element={<ListDocumentsForClients />} />
        <Route path="DocumentsForEmployee" element={<ListDocumentsForEmployees />} />
        <Route path="CreateBook" exact element={<CreateBook />} />
        <Route path="CreateDvd" exact element={<CreateDvd />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
