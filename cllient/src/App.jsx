// src/App.js
import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from "./Layout/Layout";
import PinnacleSolutions from "./components/PinnacleSoultions";
import MetaTags from './components/MetaTag';
import CookieConsent from './components/CookieConsent/CookieConsent';
import ApplicationFormPage from './components/JobFeed/JobApplicationDialog';

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
  const [cookieConsent, setCookieConsent] = useState(null);

  const handleConsent = (consentType) => {
    setCookieConsent(consentType);
    if (consentType === 'all') {
      // Load Google Analytics script
      (function() {
        var ga = document.createElement('script');
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID';
        document.head.appendChild(ga);
        ga.onload = function() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_TRACKING_ID');
        };
      })();
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetaTags />
      <CookieConsent onConsent={handleConsent} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/elevate" element={<Elevate />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/executive" element={<Executive />} />
        <Route path="/contingency" element={<Contingency />} />
        <Route path="/pinnacle-solutions" element={<PinnacleSolutions />} />
        <Route path="*" element={<Layout />} />
        <Route path="/apply/:jobId" element={<ApplicationFormPage />} /> {/* Add this route */}
           

      </Routes>
    </Suspense>
  );
}

export default App;
