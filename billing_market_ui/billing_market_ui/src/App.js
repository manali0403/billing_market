import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/Layout/NavBar';
import UserRegistration from './Components/auth_components/UserRegistration';
import Login from './Components/auth_components/Login';
import CEODashboard from './Components/dashboards/CEODashboard';
import ManagerDashboard from './Components/dashboards/ManagerDashboard';
import SalesManDashboard from './Components/dashboards/SalesManDashboard';
import AccountantDashBoard from './Components/dashboards/AccountantDashBoard';
import StaffDashboard from './Components/dashboards/StaffDashboard';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Login />} />
        <Route  path='/register' element={<UserRegistration />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/ceo' element={<CEODashboard />} />
        <Route  path='/manager' element={<ManagerDashboard />} />
        <Route  path='/accountant' element={<AccountantDashBoard />} />
        <Route  path='/salesman' element={<SalesManDashboard />} /> 
        <Route  path='/staff' element={<StaffDashboard />} /> 

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
