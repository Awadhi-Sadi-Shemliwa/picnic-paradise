import React from "react";

const FAQSection = () => {
  return (
    <section className="space-y-[24px]">
      <article className="border-b-[1px] border-[#333] pb-[24px]">
        <h3 className="text-[18px] font-medium mb-[8px]">
          How do I book an event?
        </h3>
        <p className="text-[#CCC]">
          Browse our events section, select your preferred event, and click
          "Book Now". Follow the booking process to secure your spot.
        </p>
      </article>

      <article className="border-b-[1px] border-[#333] pb-[24px]">
        <h3 className="text-[18px] font-medium mb-[8px]">
          What's your cancellation policy?
        </h3>
        <p className="text-[#CCC]">
          Cancellations made 48 hours before the event are eligible for a full
          refund. Later cancellations may be subject to fees.
        </p>
      </article>

      <article className="border-b-[1px] border-[#333] pb-[24px]">
        <h3 className="text-[18px] font-medium mb-[8px]">
          Do you offer custom events?
        </h3>
        <p className="text-[#CCC]">
          Yes, we specialize in creating bespoke luxury events. Contact our team
          to discuss your requirements.
        </p>
      </article>
    </section>
  );
};

export default FAQSection;