import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const DisclaimerPolicy = () => {
  return (
    <div className="app bg-white text-gray-800 font-sans">
      <Navbar />
      <header className="bg-[#B1C000] mt-[100px] text-white p-4 ">
        <h1 className="text-3xl font-bold text-center">Disclaimer Policy</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#B1C000]">
          <h2 className="text-xl mb-4">This Disclaimer Policy (the “Policy”) applies to Pinnacle Solutions Private Ltd. and its group companies, headquartered in New Delhi, India, and outlines the terms and conditions that govern your use of our Site. By accessing or using the Site, you agree to comply with and be bound by this Policy. If you do not agree with this Policy, please do not use the Site.</h2>
          <p className="mb-6">This disclaimer policy is designed to provide clarity on the terms of use for our website and to protect Pinnacle Solutions Private Ltd. and its group companies from potential liabilities. We encourage you to read it carefully and contact us if you have any questions.</p>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">General Disclaimer</h3>
            <p className="mb-4">The information provided on this Site is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Site or the information, products, services, or related graphics contained on the Site for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Service Disclaimer</h3>
            <p className="mb-4">While Pinnacle Solutions and its group companies, the firm (henceforth referred to as “Pinnacle” or the “firm”), and the team at the firm, have a strong record of helping our clients we do not guarantee any specific outcomes. We offer a wide range of HR services as listed on our official website for our clients. However, we cannot guarantee interview calls, job offers, or a perfect fit with any employer, as the final hiring decision ultimately rests with the employer.</p>
            <p className="mb-4">The services associated with or being offered are only provided through the official team members and via the official email addresses, on behalf of the firm. You are advised to be cautious of calls/emails asking for payment from other websites that claim to offer similar services under the name of Pinnacle or its group companies. We have no associates/agents other than the Single Point of Contact (SPOC) who will be in touch with you on behalf of the firm.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Communication Policy</h3>
            <p className="mb-4">The client hereby unconditionally consents that such communications via SMS, internet-based messaging applications like WhatsApp, voice call, email, or any other mode by Pinnacle Solutions and its group companies are:</p>
            <ul className="list-disc ml-8 mb-4">
              <li>upon the request and authorization of the client;</li>
              <li>'transactional' and not 'unsolicited commercial communication' as per the guidelines of the Telecom Regulation Authority of India (TRAI), and</li>
              <li>in compliance with the relevant guidelines of TRAI or any other applicable authority in India and abroad.</li>
            </ul>
            <p className="mb-4">The client agrees to indemnify Pinnacle Solutions and its group companies, including any of their employees or partners, against any types of losses and damages incurred due to a breach of this agreement or any related misrepresentation.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Professional Advice</h3>
            <p className="mb-4">The content on our Site is not intended to be a substitute for professional advice. You should consult a qualified professional for advice specific to your situation. Pinnacle Solution Private Ltd. or its group companies shall not be liable for any losses, damages, or claims resulting from your reliance on the information provided on this Site.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Third-Party Links</h3>
            <p className="mb-4">Our Site may contain links and affiliates to third-party websites that are not owned or controlled by Pinnacle Solutions Private Ltd. or its group companies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
            <p className="mb-4">In no event will Pinnacle Solutions Private Ltd. or any of its employees, representatives, partners/directors, or owners, be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Site.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Changes to This Policy</h3>
            <p className="mb-4">Pinnacle Solutions Private Ltd. reserves the right to modify this Policy at any time. Any changes will be effective immediately upon posting to the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Policy.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Governing Law</h3>
            <p className="mb-4">This Policy shall be governed by and construed in accordance with the laws of New Delhi, India. Any disputes arising under or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-4">If you have any questions or concerns about this Policy, please contact us at: <a href="mailto:contact@pinnacle.biz" className="text-blue-600">contact@pinnacle.biz</a></p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DisclaimerPolicy;
