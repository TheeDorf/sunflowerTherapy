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
      <div id="ff-compose"></div>
    </div>
  );
};

export default Contact;
