import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar'
import Login from './Pages/Auth/Login/Login'
import Category from './Pages/Category/Category';
import PrivateRoutes from './utils/PrivateRoutes';
import Home from './Pages/Home/Home';
import CreatePlan from './Pages/CreatePlan/CreatePlan';
import PlanStatus from './Pages/PlanStatus/PlanStatus';
import JobForm from './Pages/CreateJob/CreateJob';
import AdminJobs from './Pages/Jobs/AdminJobs';
import EditJob from './Pages/Jobs/EditJobs';
import AdminJobDetails from './Pages/Jobs/AdminJobDetail';
import AdminApplications from './Pages/Applications/AdminApplications';
import AdminApplicationDetails from './Pages/Applications/AdminApplicationDetails';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} /> 

        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/createplan" element={<CreatePlan />} /> 
          <Route path="/planstatus/:userId" element={<PlanStatus />} />
          <Route path="/createjob" element={<JobForm />} />
          <Route path="/allJobs" element={<AdminJobs />} />
          <Route path="/admin/edit/:id" element={<EditJob />} />
          <Route path="/admin/view/:id" element={<AdminJobDetails />} />
          <Route path="/admin/applications" element={<AdminApplications/>}/>
          <Route path="/admin/application/:id" element={<AdminApplicationDetails/>} />
              
        </Route> 
      </Routes> 
    </>
  )
}

export default App
