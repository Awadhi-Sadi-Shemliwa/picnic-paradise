import React from "react";

const ContactHero = () => {
  return (
    <header className="w-full h-[400px] relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent z-10" />

      {/* Clickable link overlay */}
      <a
        href="https://www.google.com/maps/place/-6.755563005039373,39.2871594940973"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20"
      />

      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4968.1234855957555!2d39.2871594940973!3d-6.755563005039373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2stz!4v1741259437095!5m2!1sen!2stz"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full object-cover"
      />

      {/* Text overlay */}
      <div className="absolute top-1/2 left-[72px] transform -translate-y-1/2 z-30">
        <h1 className="text-[48px] font-bold leading-[60px] mb-[24px]">
          Our Location
        </h1>
        <p className="text-[18px] text-[#CCC] max-w-[500px]">
          Find us at our business location. We look forward to welcoming you!
        </p>
      </div>
    </header>
  );
};

export default ContactHero;
