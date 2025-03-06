"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[24px]">
        <label
          htmlFor="name"
          className="block text-[14px] text-[#CCC] mb-[8px]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-[56px] bg-[#222] rounded-[8px] px-[16px] text-[16px] border-[1px] border-[#333] focus:border-[#EE668C] outline-none"
        />
      </div>

      <div className="mb-[24px]">
        <label
          htmlFor="email"
          className="block text-[14px] text-[#CCC] mb-[8px]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-[56px] bg-[#222] rounded-[8px] px-[16px] text-[16px] border-[1px] border-[#333] focus:border-[#EE668C] outline-none"
        />
      </div>

      <div className="mb-[24px]">
        <label
          htmlFor="subject"
          className="block text-[14px] text-[#CCC] mb-[8px]"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full h-[56px] bg-[#222] rounded-[8px] px-[16px] text-[16px] border-[1px] border-[#333] focus:border-[#EE668C] outline-none"
        />
      </div>

      <div className="mb-[24px]">
        <label
          htmlFor="message"
          className="block text-[14px] text-[#CCC] mb-[8px]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-[160px] bg-[#222] rounded-[8px] p-[16px] text-[16px] border-[1px] border-[#333] focus:border-[#EE668C] outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full h-[56px] bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 rounded-[8px] text-[16px] font-medium"
      >
        Send Message
      </button>

      {showSuccess && (
        <div className="fixed top-[24px] right-[24px] bg-[#4CAF50] text-white px-[24px] py-[16px] rounded-[8px]">
          Message sent successfully!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
