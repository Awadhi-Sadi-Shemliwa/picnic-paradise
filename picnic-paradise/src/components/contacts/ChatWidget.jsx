"use client";
import React, { useState } from "react";

const ChatWidget = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowChat(!showChat)}
        aria-label="Toggle chat window"
        className="fixed bottom-[24px] right-[24px] w-[60px] h-[60px] bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 rounded-full flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
      >
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {showChat && (
        <div className="fixed bottom-[96px] right-[24px] w-[320px] bg-[#1A1A1A] rounded-[16px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <header className="p-[24px] border-b-[1px] border-[#333]">
            <h3 className="text-[18px] font-medium">Live Chat</h3>
          </header>
          <div className="p-[24px] h-[400px] overflow-y-auto">
            <div className="text-center text-[#CCC]">
              Chat with our support team
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;