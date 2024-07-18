import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from "./Layout/Layout";
import PinnacleSolutions from "./components/PinnacleSoultions";

const LandingPage = lazy(() => import('./Pages/LandingPage/LandingPage'));
const Elevate = lazy(() => import('./Pages/Home/NewHome'));
const JobFeed = lazy(() => import('./components/JobFeed/Jobfeed'));
const JobDetails = lazy(() => import('./components/JobFeed/JobDetails'));
const JobList = lazy(() => import('./components/JobFeed/Jobfeed'));
const Executive = lazy(() => import('./Pages/ExecutiveSerch/Executive'));
const Contingency = lazy(() => import('./Pages/Cotingency/ContingencySearch'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/elevate" element={<Elevate />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="*" element={<Layout />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/contingency" element={<Contingency />} />
        <Route path="/pinnacle-solutions" element={<PinnacleSolutions />} />
      </Routes>
    </Suspense>
  );
}

export default App;
