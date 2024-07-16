// import './App.scss'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import PrivateRoutes from './utils/PrivateRoutes'
// import Subscription from './utils/Subscription'
// import NonSubscription from './utils/NonSubscription'
// import HaveProfile from './utils/HaveProfile'
// import Navbar from './components/Navbar/Navbar'
// import Login from './Pages/Auth/Login/Login'
// import Signup from './Pages/Auth/Signup/Signup'
// import Profile from './Pages/Profile/Profile'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import DashBoard from './Pages/DashBoard/DashBoard'
// import MakeProfile from './Pages/MakeProfile/MakeProfile'
// import Plans from './Pages/Plans/Plans'
// import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
// import EditProfile from './Pages/EditProfile/EditProfile'
// import OrderHistory from './Pages/DashBoard/OrderHistory'
// import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword'
// import NewHome from './Pages/Home/NewHome'

// import LandingPages from  './Pages/LandingPage/LandingPage'

// function App() {
 
//   return (
//     <>
//     <ToastContainer />
//     <Navbar />
//     <WhatsAppButton />



//     <div className='mt-[67px] lg:mt-[60.8px] '>
//       <Routes>
  
//         <Route path="/" element={<NewHome />} />
//         <Route path="/landing" element={<LandingPages />} />
//         <Route path="/plans" element={<Plans />} />

//         <Route element={<PrivateRoutes />} >

//           <Route element={<HaveProfile />} >
//             <Route path="/dashboard" element={<DashBoard />} />
//             <Route path="/orderhistory" element={<OrderHistory />} />
//           </Route>

//           {/* <Route element={<NonSubscription />} > */}
//             <Route path="/createprofile" element={<MakeProfile />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/editprofile/:userId" element={<EditProfile />} />
//           {/* </Route>   */}
          
//           {/* <Route element={<Subscription />} >
//             <Route path="/dashboard" element={<DashBoard />} />
//           </Route> */}

//         </Route>
              


//         <Route path="/forgotpassword" element={<ForgotPassword />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes> 
//       </div>

//     </>
//   )
// }


// export default App


import Layout from "./Layout/Layout"
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Elevate from "./Pages/Home/NewHome"
import JobFeed from "./components/JobFeed/Jobfeed"
import JobDetails from "./components/JobFeed/JobDetails"
import JobList from "./components/JobFeed/Jobfeed"
import Executive from "./Pages/ExecutiveSerch/Executive"
import Contingency from "./Pages/Cotingency/ContingencySearch"

const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/elevate" element={< Elevate/>} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Layout />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/executive" element={<Executive />} />
      <Route path="/contingency" element={<Contingency />} />


    </Routes>
    
    </>
  )
}

export default App