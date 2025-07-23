"use client";

import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  content: string;
  timestamp: string;
};

const ChatBot = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWelcomeTip, setShowWelcomeTip] = useState<boolean>(true);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeTip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const now = new Date();
      const hour = now.getHours();
      let greeting = "Hello";

      if (hour < 12) greeting = "Good morning";
      else if (hour < 18) greeting = "Good afternoon";
      else greeting = "Good evening";

      const welcomeMessage: Message = {
        role: "bot",
        content: `${greeting}, I’m your personal assistant. I'm ready to answer your questions.`,
        timestamp: now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const sendMessage = async (customInput?: string) => {
    const messageToSend = customInput ?? input;
    if (!messageToSend.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: Message = { role: "user", content: messageToSend, timestamp };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      if (!res.ok) throw new Error("API Error");

      const data: { response: string } = await res.json();
      const fullResponse = data.response;
      let index = 0;

      setTypingMessage("");

      const typingInterval = setInterval(() => {
        setTypingMessage((prev) => (prev ?? "") + fullResponse.charAt(index));
        index++;

        if (index >= fullResponse.length) {
          clearInterval(typingInterval);
          const botMessage: Message = {
            role: "bot",
            content: fullResponse,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => [...prev, botMessage]);
          setTypingMessage(null);
        }
      }, 30); // speed per character
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Welcome Tip */}
      <AnimatePresence>
        {showWelcomeTip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-[90px] left-14 bg-white text-black px-4 py-3 rounded-lg rounded-bl-none shadow-lg z-50 max-w-[280px] text-sm"
          >
            <p className="font-semibold mb-1">Hi! I’m Tucsany Chatbot. 👋</p>
            <p>Nice to meet you. How can I assist you?</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 left-6 z-50 bg-orange text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        aria-label="Open Chatbot"
      >
        <img src="/images/chatbot/chatIconw.svg" alt="Chat Icon" className="w-6 h-6" />
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[100px] left-6 z-40 bg-white shadow-xl h-[70vh] w-[80vw] max-w-[400px] rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-200">
              <div className="flex items-center gap-3">
                <img src="/images/chatbot/chatIcon.svg" alt="Logo" className="w-10 h-10" />
                <div>
                  <h2 className="text-lg font-semibold text-black">Tucsany Chatbot</h2>
                  <p className="text-sm text-gray-500">Intelligent Guide</p>
                </div>
              </div>
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black text-xl">
                ×
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="text-xs text-gray-500 mb-1">
                      Tucsany Chatbot • {msg.timestamp}
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 text-sm rounded-lg max-w-[100%] ${msg.role === "user"
                        ? "bg-orange text-white rounded-br-none"
                        : "bg-orange-100 text-black rounded-bl-none"
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing Effect */}
              {typingMessage && (
                <div className="flex flex-col items-start">
                  <div className="text-xs text-gray-500 mb-1">
                    Tucsany Chatbot • typing...
                  </div>
                  <div className="px-4 py-2 text-sm rounded-lg max-w-[100%] bg-orange-100 text-black rounded-bl-none">
                    {typingMessage}
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Questions – just after body, before input */}
            {messages.length === 1 && messages[0].role === "bot" && (
              <div className="px-4 pb-2 space-y-2">
                <p className="text-xs text-gray-500">You can try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What services do you offer?",
                    "How can I book a tour?",
                    "Do you have special offers?",
                  ].map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="bg-gray-100 text-black text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Field */}
            <div className="flex p-3 gap-2">
              <input
                className="flex-1 bg-gray-200 px-4 py-2 text-sm focus:outline-none rounded-3xl"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask Anything..."
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="bg-orange text-white px-4 py-2 rounded-full text-sm"
              >
                {loading ? <img src="/images/chatbot/stop.svg" alt="Send" className="w-5 h-5" /> : <img src="/images/chatbot/send.svg" alt="Send" className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
