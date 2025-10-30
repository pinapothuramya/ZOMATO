import './App.css';
import AdminDetails from './Components/Admin/AdminDetails';
import { EmployeDetails } from './Components/EmployeData/EmployeDetails';

import Login from './Components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/admin" element={<AdminDetails />} />
         <Route path='/employe' element={<EmployeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
