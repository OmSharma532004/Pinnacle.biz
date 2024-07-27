import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Sitemap = () => {
  return (
    <div className="app bg-white text-gray-800 font-sans">
      <Navbar />
      <header className="bg-[#B1C000] mt-[100px] text-white p-4 ">
        <h1 className="text-3xl font-bold text-center"> Sitemap</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#B1C000] space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Homepage Map</h2>
            <ol className="list-decimal ml-8 space-y-2">
              <li>
                <strong>Header</strong>
                <ul className="list-disc ml-8">
                  <li>Logo</li>
                  <li>Navigation Menu (Home, About Us, Services, Industries, Resources, News & Events, Contact Us)</li>
                </ul>
              </li>
              <li>
                <strong>Main Banner</strong>
                <ul className="list-disc ml-8">
                  <li>Catchy tagline</li>
                  <li>Call to action buttons (Get Started, Schedule a Meeting)</li>
                </ul>
              </li>
              <li>
                <strong>About Section</strong>
                <ul className="list-disc ml-8">
                  <li>Brief introduction about the company</li>
                  <li>Key statistics (years of expertise, number of clients, countries served, candidate database)</li>
                </ul>
              </li>
              <li>
                <strong>Services Overview</strong>
                <ul className="list-disc ml-8">
                  <li>Brief descriptions of main services (Staffing Solutions, HR Consulting, Payroll Services)</li>
                </ul>
              </li>
              <li>
                <strong>Industries Served</strong>
                <ul className="list-disc ml-8">
                  <li>List of industries (IT, Healthcare, Manufacturing)</li>
                </ul>
              </li>
              <li>
                <strong>Why Choose Us</strong>
                <ul className="list-disc ml-8">
                  <li>Unique selling points (Tailored Solutions, Proven Success)</li>
                </ul>
              </li>
              <li>
                <strong>Call to Action</strong>
                <ul className="list-disc ml-8">
                  <li>Schedule a Meeting button</li>
                </ul>
              </li>
              <li>
                <strong>Footer</strong>
                <ul className="list-disc ml-8">
                  <li>Quick links (Home, About Us, Blogs, Contact Us)</li>
                  <li>Legal links (Disclaimer Policy, Cookie Policy, Privacy Policy, Sitemap)</li>
                  <li>Contact information (Email, Phone number)</li>
                  <li>Social media links (Twitter, LinkedIn, Instagram)</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Sitemap</h2>
            <ol className="list-decimal ml-8 space-y-2">
              <li>Home
                <ul className="list-disc ml-8">
                  <li>URL: /</li>
                </ul>
              </li>
              <li>About Us
                <ul className="list-disc ml-8">
                  <li>URL: /about</li>
                  <li>Company Overview: /about/company-overview</li>
                  <li>Leadership Team: /about/leadership-team</li>
                  <li>Careers: /about/careers</li>
                </ul>
              </li>
              <li>Services
                <ul className="list-disc ml-8">
                  <li>URL: /services</li>
                  <li>Staffing Solutions: /services/staffing</li>
                  <li>HR Consulting: /services/hr-consulting</li>
                  <li>Payroll Services: /services/payroll</li>
                </ul>
              </li>
              <li>Industries
                <ul className="list-disc ml-8">
                  <li>URL: /industries</li>
                  <li>IT: /industries/it</li>
                  <li>Healthcare: /industries/healthcare</li>
                  <li>Manufacturing: /industries/manufacturing</li>
                </ul>
              </li>
              <li>Resources
                <ul className="list-disc ml-8">
                  <li>URL: /resources</li>
                  <li>Blog: /resources/blog</li>
                  <li>Case Studies: /resources/case-studies</li>
                </ul>
              </li>
              <li>News & Events
                <ul className="list-disc ml-8">
                  <li>URL: /news-events</li>
                </ul>
              </li>
              <li>Contact Us
                <ul className="list-disc ml-8">
                  <li>URL: /contact</li>
                </ul>
              </li>
              <li>Privacy Policy
                <ul className="list-disc ml-8">
                  <li>URL: /privacy-policy</li>
                </ul>
              </li>
              <li>Terms of Service
                <ul className="list-disc ml-8">
                  <li>URL: /terms-of-service</li>
                </ul>
              </li>
              <li>Sitemap
                <ul className="list-disc ml-8">
                  <li>URL: /sitemap</li>
                </ul>
              </li>
              <li>Legal
                <ul className="list-disc ml-8">
                  <li>Disclaimer Policy: /disclaimer</li>
                  <li>Cookie Policy: /cookie-policy</li>
                </ul>
              </li>
              <li>Jobs
                <ul className="list-disc ml-8">
                  <li>Jobs in Delhi: /jobs/delhi</li>
                  <li>Jobs in Gurugram: /jobs/gurugram</li>
                  <li>Jobs in Bengaluru: /jobs/bengaluru</li>
                  <li>Jobs in Mumbai: /jobs/mumbai</li>
                  <li>Engineering Jobs: /jobs/engineering</li>
                  <li>Product Jobs: /jobs/product</li>
                  <li>Leadership Jobs: /jobs/leadership</li>
                  <li>Jobs in India: /jobs/india</li>
                  <li>Jobs in Dubai: /jobs/dubai</li>
                  <li>Jobs in Singapore: /jobs/singapore</li>
                  <li>Jobs in North America: /jobs/north-america</li>
                  <li>Jobs in London: /jobs/london</li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
