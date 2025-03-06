import React from "react";

const BusinessHours = () => {
  return (
    <section className="bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 rounded-[16px] p-[40px]">
      <h2 className="text-[24px] font-bold mb-[24px]">Business Hours</h2>
      <div className="space-y-[16px]">
        <div className="flex justify-between">
          <p className="text-[#CCC]">Monday - Friday</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#CCC]">Saturday</p>
          <p>10:00 AM - 4:00 PM</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#CCC]">Sunday</p>
          <p>Closed</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;