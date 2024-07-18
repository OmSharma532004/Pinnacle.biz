import React from 'react';
import { Helmet } from 'react-helmet';

const PinnacleSolutions = () => {
  return (
    <div>
      <Helmet>
        <title>Pinnacle Solutions | Everything People</title>
        <meta name="description" content="Pinnacle is a leading service provider for 'everything people', offering tailored and high-quality custom services. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals." />
        <meta name="keywords" content="consulting, executive search, advisory services, market research, career advisory, RPO services, contract staffing, team building" />
        
        <meta property="og:title" content="Pinnacle Solutions | Everything People" />
        <meta property="og:description" content="Pinnacle is a leading service provider for 'everything people', offering tailored and high-quality custom services. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals." />
        <meta property="og:image" content="https://pinnacle.biz/image.jpg" />
        <meta property="og:url" content="https://pinnacle.biz/" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pinnacle Solutions",
              "description": "Pinnacle is a leading service provider for 'everything people', offering tailored and high-quality custom services. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals.",
              "url": "https://pinnacle.biz/",
              "logo": "https://pinnacle.biz/logo.jpg",
              "sameAs": [
                "https://www.facebook.com/pinnaclesolutions",
                "https://www.twitter.com/pinnaclesolutions",
                "https://www.linkedin.com/company/pinnaclesolutions"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-1234",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>
      <h1>Pinnacle Solutions</h1>
      <p>
        Pinnacle is a leading service provider for "everything people", offering tailored and high-quality custom services. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals. With over 100+ satisfied clients and thousands of professionals placed worldwide, we excel in consulting, executive search, advisory services, market research, career advisory services, RPO services, contract staffing, and team building.
      </p>
      <p>Trust Pinnacle to help you achieve your business objectives.</p>
    </div>
  );
};

export default PinnacleSolutions;
