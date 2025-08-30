'use client';
import { useState, useEffect } from 'react';

export default function Websocket({ onMessage }: {
    onMessage: ((ev: MessageEvent<any>) => any) | null
}) {
  const isBrowser = typeof window !== "undefined";
  
  useState(() => {
    if (isBrowser) {
      const ws = new WebSocket("wss://chess.tommyasd.com/ws");
      console.log("Established a websocket connection")

      ws.onmessage = (event) => {
        console.log("Received message", event)
        if (onMessage) {
          onMessage(event.data);
        }
      };

      return () => {
        ws.close();
      };
    }
  });

  return null;
}
