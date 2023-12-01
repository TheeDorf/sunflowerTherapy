import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/117149780968984418334/form/1FAIpQLSe2P8uVPiLVxypPNvMmlcqjHSTn7pHzzMg_rAy3Kuj1R5MHtg/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;

    // Append the script element to the document body
    document.body.appendChild(script);

    // Remove the script when the component is unmounted to avoid memory leaks
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="contact">
      <h2>Contact</h2>

      {/* Form Section */}
      <div id="ff-compose"></div>

      {/* Visit Us Section */}
      <div className="visit-us">
        <h3>Visit Us</h3>
        <p>302 West Grand Ave. Suite 9<br />El Segundo, CA 90245</p>
      </div>
    </div>
  );
};

export default Contact;
