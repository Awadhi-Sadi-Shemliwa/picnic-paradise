import React, { useState } from 'react';
import { ChatBubbleLeftIcon, PaperClipIcon } from '@heroicons/react/24/outline';

const ManageTickets = () => {
  const [selectedTicket] = useState({
    id: 1,
    user: 'John Doe',
    subject: 'Booking Cancellation',
    status: 'Open',
    priority: 'High',
    created: '2023-08-12 14:30',
    messages: [
      {
        id: 1,
        sender: 'John Doe',
        message: 'I need to cancel my booking for the upcoming event.',
        timestamp: '2023-08-12 14:30'
      },
      {
        id: 2,
        sender: 'Support Agent',
        message: 'I understand you want to cancel your booking. Could you please provide your booking reference number?',
        timestamp: '2023-08-12 14:35'
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Ticket Details</h1>
          <p className="mt-2 text-gray-600">Manage and respond to support tickets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-medium text-gray-900">{selectedTicket.subject}</h2>
                    <p className="mt-1 text-sm text-gray-500">Opened by {selectedTicket.user}</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      selectedTicket.priority === 'High' ? 'bg-red-100 text-red-800' : ''
                    }`}>
                      {selectedTicket.priority} Priority
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                      {selectedTicket.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {selectedTicket.messages.map((message) => (
                  <div key={message.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-500">
                          {message.sender.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">{message.sender}</h3>
                        <p className="text-sm text-gray-500">{message.timestamp}</p>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <textarea
                      rows={4}
                      placeholder="Type your response..."
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <div className="mt-2 flex justify-between items-center">
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-600">
                        <PaperClipIcon className="h-5 w-5 mr-2" />
                        Attach files
                      </button>
                      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Send Response
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Ticket Information</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Ticket ID</dt>
                  <dd className="mt-1 text-sm text-gray-900">#{selectedTicket.id}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Created</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedTicket.created}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1">
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      <option>Open</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Closed</option>
                    </select>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Priority</dt>
                  <dd className="mt-1">
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500">Quick Actions</h3>
                <div className="mt-2 space-y-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    <ChatBubbleLeftIcon className="h-5 w-5 inline-block mr-2 text-gray-400" />
                    Start Live Chat
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    Transfer Ticket
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    Mark as Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTickets;