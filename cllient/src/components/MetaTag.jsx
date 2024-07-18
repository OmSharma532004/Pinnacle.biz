import { Helmet } from 'react-helmet-async';

const MetaTags = () => (
    <Helmet>
        <title>Pinnacle Solutions | Everything People</title>
        <meta name="description" content="Elevate your business with tailored, high-quality services from Pinnacle Solutions. Contact us for preferred pricing and solutions aligned with your business goals. Explore our login, signup, about, jobs, and people sections for comprehensive services." />
        
        <link rel="canonical" href="https://pinnacle.biz" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Pinnacle Solutions | Custom Services, Jobs, People & Everything" />
        <meta property="og:description" content="Elevate your business with tailored, high-quality services from Pinnacle Solutions. Contact us for preferred pricing and solutions aligned with your business goals." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pinnacle Solutions | Custom Services, Jobs, People & Everything" />
        <meta name="twitter:description" content="Elevate your business with tailored, high-quality services from Pinnacle Solutions. Contact us for preferred pricing and solutions aligned with your business goals." />
        <meta name="twitter:image" content="https://pinnacle.biz/logo.jpg" />
        
        {/* LinkedIn */}
        <meta property="og:title" content="Pinnacle Solutions | Custom Services, Jobs, People & Everything" />
        <meta property="og:description" content="Elevate your business with tailored, high-quality services from Pinnacle Solutions. Contact us for preferred pricing and solutions aligned with your business goals." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
        
        {/* Instagram */}
        <meta property="og:title" content="Pinnacle Solutions | Custom Services, Jobs, People & Everything" />
        <meta property="og:description" content="Elevate your business with tailored, high-quality services from Pinnacle Solutions. Contact us for preferred pricing and solutions aligned with your business goals." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
    </Helmet>
);

export default MetaTags;
