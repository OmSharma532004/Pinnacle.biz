import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const PrivacyPolicy = () => {
  return (
 <div>
    <Navbar/>
       <div className="app mt-[100px] bg-white text-gray-800 font-sans">
      <header className="bg-[#B1C000] text-white p-4">
        <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-8 border-[#B1C000]">
          <h2 className="text-xl mb-4">Pinnacle Solutions and its group companies ("we," "us," "our") operate <a href="https://pinnacle.biz/" className="text-blue-600">https://pinnacle.biz/</a> (the “Site”) and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website including any other media form, media channel, mobile website, or connected thereto (collectively, the “Site”). Your information helps us understand and serve you better. No information regarding the personal details of its users and members is rented or sold to any third parties whatsoever.</h2>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">1. Information Collection and Use</h3>
            <p className="mb-4"><strong>Personal Data:</strong> While using our Site, we may request certain personally identifiable information from you, which can be used to contact or identify you. This information may include, but is not limited to, your name ("Personal Information").</p>
            <p className="mb-4"><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. In addition, we may use third-party services such as Google Analytics that collect, monitor, and analyze the Log Data.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">2. Disclosure of Your Information</h3>
            <p className="mb-4"><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
            <p className="mb-4"><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
            <p className="mb-4"><strong>Communications:</strong> We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information along with using it to enhance the end-user experience.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">3. Security of Your Information</h3>
            <p className="mb-4">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">4. Cookies</h3>
            <p className="mb-4">Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer’s hard drive. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">5. Changes to This Privacy Policy</h3>
            <p className="mb-4">We may update this Privacy Policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">6. Governing Law</h3>
            <p className="mb-4">This Policy shall be governed by and construed in accordance with the laws of New Delhi, India. Any disputes arising under or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Contact Us</h3>
            <p className="mb-4">If you have any questions or concerns about this Policy, please contact us at: <a href="mailto:contact@pinnacle.biz" className="text-blue-600">contact@pinnacle.biz</a></p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
 </div>
  );
};

export default PrivacyPolicy;
