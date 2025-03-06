import React from "react";

const QuickContact = () => {
  return (
    <section className="bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 rounded-[16px] p-[40px] mb-[24px]">
      <h2 className="text-[24px] font-bold mb-[24px]">Quick Contact</h2>
      <div className="space-y-[16px]">
        <div className="flex items-center gap-[16px]">
          <div className="w-[40px] h-[40px] bg-[#222] rounded-[8px] flex items-center justify-center">
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[14px] text-[#CCC]">Phone</p>
            <p className="text-[16px]">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="w-[40px] h-[40px] bg-[#222] rounded-[8px] flex items-center justify-center">
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[14px] text-[#CCC]">Email</p>
            <p className="text-[16px]">contact@luxeevents.com</p>
          </div>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="w-[40px] h-[40px] bg-[#222] rounded-[8px] flex items-center justify-center">
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[14px] text-[#CCC]">Address</p>
            <address className="text-[16px] not-italic">
              123 Luxury Lane, Suite 100
              <br />
              Beverly Hills, CA 90210
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
