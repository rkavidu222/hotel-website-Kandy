import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Villa Vajrapani | Luxury Hotel in Kandy</title>
      <meta name="description" content="Stay at Villa Vajrapani, a peaceful luxury retreat in the mountains of Kandy, Sri Lanka. Perfect for relaxation, nature, and mindfulness." />
      <meta name="keywords" content="hotel in Kandy, Kandy villa, Villa Vajrapani, Sri Lanka retreat, luxury hotel Sri Lanka" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Villa Vajrapani | Luxury Hotel in Kandy" />
      <meta property="og:description" content="Discover Villa Vajrapani, a tranquil nature retreat in Kandy. Book your escape now!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.villavajrapani.com" />
      <meta property="og:image" content="https://www.villavajrapani.com/preview.jpg" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
