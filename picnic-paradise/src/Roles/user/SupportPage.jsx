import React, { useState } from 'react';
import { ChatBubbleLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      question: 'How do I cancel my booking?',
      answer: 'You can cancel your booking up to 48 hours before the event through your dashboard. Go to Upcoming Events and click the Cancel button.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'Full refunds are provided for cancellations made 48 hours before the event. Partial refunds may be available for last-minute cancellations.'
    },
    {
      question: 'How do I update my payment information?',
      answer: 'You can update your payment information in your account settings under the Payment Methods section.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="mt-2 text-gray-600">How can we help you today?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === 'chat'
                        ? 'border-b-2 border-indigo-500 text-indigo-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <ChatBubbleLeftIcon className="h-5 w-5 inline-block mr-2" />
                    Live Chat
                  </button>
                  <button
                    onClick={() => setActiveTab('ticket')}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === 'ticket'
                        ? 'border-b-2 border-indigo-500 text-indigo-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Submit Ticket
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'chat' ? (
                  <div>
                    <div className="h-96 bg-gray-50 rounded-lg p-4 mb-4">
                      {/* Chat messages would go here */}
                      <div className="text-center text-gray-500 mt-4">
                        Start a conversation with our support team
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Send
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Subject</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Submit Ticket
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                <QuestionMarkCircleIcon className="h-6 w-6 inline-block mr-2 text-indigo-600" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-medium text-gray-900">{faq.question}</h3>
                    <p className="mt-2 text-sm text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;