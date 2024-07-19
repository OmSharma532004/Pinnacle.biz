import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from "./Layout/Layout";
import PinnacleSolutions from "./components/PinnacleSoultions";
import MetaTags from './components/MetaTag';

const LandingPage = lazy(() => import('./Pages/LandingPage/LandingPage'));
const Elevate = lazy(() => import('./Pages/Home/NewHome'));
const JobFeed = lazy(() => import('./components/JobFeed/Jobfeed'));
const JobDetails = lazy(() => import('./components/JobFeed/JobDetails'));
const JobList = lazy(() => import('./components/JobFeed/Jobfeed'));
const Executive = lazy(() => import('./Pages/ExecutiveSerch/Executive'));
const Contingency = lazy(() => import('./Pages/Cotingency/ContingencySearch'));
const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Page not found</p>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetaTags />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/elevate" element={<Elevate />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/contingency" element={<Contingency />} />
        <Route path="/pinnacle-solutions" element={<PinnacleSolutions />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
