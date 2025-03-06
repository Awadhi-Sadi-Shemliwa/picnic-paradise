"use client";
import React, { useState } from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import QuickContact from "./QuickContact";
import BusinessHours from "./BusinessHours";
import ChatWidget from "./ChatWidget";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 text-[#FFF] overflow-x-hidden">
      <ContactHero />

      <section className="max-w-[1223px] mx-auto px-[24px] py-[60px]">
        <div className="flex gap-[24px] max-lg:flex-col">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 rounded-[16px] p-[40px] mb-[24px]">
              <nav className="flex gap-[24px] mb-[40px]">
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`text-[18px] font-medium ${
                    activeTab === "contact" ? "text-white" : "text-[#CCC]"
                  }`}
                >
                  Contact Form
                </button>
                <button
                  onClick={() => setActiveTab("faq")}
                  className={`text-[18px] font-medium ${
                    activeTab === "faq" ? "text-white" : "text-[#CCC]"
                  }`}
                >
                  FAQs
                </button>
              </nav>

              {activeTab === "contact" ? <ContactForm /> : <FAQSection />}
            </div>
          </div>

          <aside className="w-[386px] max-lg:w-full">
            <QuickContact />
            <BusinessHours />
          </aside>
        </div>
      </section>

      <ChatWidget />
    </main>
  );
};

export default Contacts;
