"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "AI", text: "Hello! How can I assist you today?", citation: "Source: AI Knowledge Base" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "User", text: input, citation: "" },
        { id: prev.length + 2, sender: "AI", text: "This is a mock response.", citation: "Source: Mock Data" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between w-full max-w-3xl p-4 bg-gray-800 shadow-lg rounded-lg">
        <div className="flex items-center">
          <h1 className="ml-4 text-2xl font-bold">UltimateResearchAgent</h1>
        </div>
      </header>
      <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-lg flex flex-col h-[90vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "AI" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg text-sm shadow-md border-2 ${
                  message.sender === "AI"
                    ? "bg-gray-700 text-gray-200 border-green-500"
                    : "bg-gray-800 text-white border-green-500"
                }`}
              >
                <p>{message.text}</p>
                {message.citation && (
                  <p className="mt-1 text-xs text-gray-400">{message.citation}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-600 bg-gray-700 text-white rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 border-2 border-green-500"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <footer className="mt-4 text-sm text-gray-400">
        <p>Made for the BrightData AI challenge</p>
        <p>Github Repo: <a href="https://github.com/UltimateHobbyCoder/ultimate-research-agent">UltimateResearchAgent</a></p>
      </footer>
    </div>
  );
}
