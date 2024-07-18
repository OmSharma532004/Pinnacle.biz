import { Helmet } from 'react-helmet-async';

const MetaTags = () => (
    <Helmet>
        <title>Pinnacle Solutions | Custom Services for Your Business</title>
        <meta name="description" content="Pinnacle Solutions offers tailored, high-quality custom services to elevate your business. Contact our skilled consulting team for preferred pricing and job solutions aligned with your business goals and vision." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Pinnacle Solutions | Custom Services for Your Business" />
        <meta property="og:description" content="Pinnacle Solutions offers tailored, high-quality custom services to elevate your business. Contact our skilled consulting team for preferred pricing and job solutions aligned with your business goals and vision." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pinnacle Solutions | Custom Services for Your Business" />
        <meta name="twitter:description" content="Pinnacle Solutions offers tailored, high-quality custom services to elevate your business. Contact our skilled consulting team for preferred pricing and job solutions aligned with your business goals and vision." />
        <meta name="twitter:image" content="https://pinnacle.biz/logo.jpg" />
        
        {/* LinkedIn */}
        <meta property="og:title" content="Pinnacle Solutions | Custom Services for Your Business" />
        <meta property="og:description" content="Pinnacle Solutions offers tailored, high-quality custom services to elevate your business. Contact our skilled consulting team for preferred pricing and job solutions aligned with your business goals and vision." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
        
        {/* Instagram */}
        <meta property="og:title" content="Pinnacle Solutions | Custom Services for Your Business" />
        <meta property="og:description" content="Pinnacle Solutions offers tailored, high-quality custom services to elevate your business. Contact our skilled consulting team for preferred pricing and job solutions aligned with your business goals and vision." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
    </Helmet>
);

export default MetaTags;
