import React, { useState, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  FaceSmileIcon,
  PaperClipIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ClockIcon,
  CheckIcon,
  PhoneIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const mockChats = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      status: 'online',
      resolved: false
    },
    unread: 2,
    lastMessage: "I'm having trouble booking a picnic spot",
    lastMessageTime: '2 min ago'
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      status: 'offline',
      resolved: true
    },
    unread: 0,
    lastMessage: 'Thanks for your help with the reservation!',
    lastMessageTime: '1 hour ago'
  }
];

const LiveChat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (activeChat) {
      setMessages([
        {
          id: 1,
          sender: 'user',
          message: "Hi, I'm trying to book a picnic spot but the payment keeps failing.",
          timestamp: '10:30 AM',
          status: 'read'
        },
        {
          id: 2,
          sender: 'support',
          message: "Hello! Sorry you're having trouble. Let me check that for you.",
          timestamp: '10:31 AM',
          status: 'read'
        }
      ]);
    }
  }, [activeChat]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'support',
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString(),
      status: 'sent'
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');

    setTimeout(() => {
      setMessages(prevMessages => prevMessages.map(msg =>
        msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);

    setTimeout(() => {
      setMessages(prevMessages => prevMessages.map(msg =>
        msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
      ));
    }, 2000);
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    setIsTyping(true);
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => setIsTyping(false), 1000);
  };

  return (
    <div className="flex w-full h-screen">
      {!activeChat && (
        <div className="w-full md:w-1/3 bg-white border-r p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Support Chats</h2>
          {mockChats.map(chat => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-100 ${chat.resolved ? 'bg-gray-200' : ''}`}
            >
              <img src={chat.user.avatar} alt={chat.user.name} className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <span className="font-bold">{chat.user.name}</span>
                  <span className="text-sm text-gray-500">{chat.lastMessageTime}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeChat && (
        <div className="w-full flex flex-col">
          <div className="flex items-center p-4 bg-white border-b">
            <ArrowLeftIcon className="w-6 h-6 cursor-pointer " onClick={() => setActiveChat(null)} />
            <img src={activeChat.user.avatar} alt="" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h3 className="font-bold">{activeChat.user.name}</h3>
              <p className="text-sm text-gray-500">{activeChat.user.status}</p>
            </div>
            <div className="flex space-x-3 ml-auto">
              <PhoneIcon className="w-6 h-6 text-gray-600" />
              <VideoCameraIcon className="w-6 h-6 text-gray-600" />
              <FaceSmileIcon className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`p-3 rounded-xl ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} max-w-xs`}>{msg.message}</div>
              </div>
            ))}
            {isTyping && <div className="text-sm text-gray-500">User is typing...</div>}
          </div>

          <div className="flex items-center p-4 bg-white border-t">
            <input
              type="text"
              value={message}
              onChange={handleTyping}
              placeholder="Type a message..."
              className="flex-grow px-3 py-2 border rounded-xl focus:outline-none"
            />
            <PaperAirplaneIcon className="w-6 h-6 text-blue-500 cursor-pointer ml-2 transform rotate-90" onClick={handleSendMessage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
