'use client';

import { useState } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import Websocket from '@/app/lib/websocket';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<string[]>([]);

  const handleWebSocketMessage = (message) => {
    console.log(message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <div>
          {/* {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))} */}
        </div>
      </div>
      <Websocket onMessage={handleWebSocketMessage} />
    </div>
  );
}
