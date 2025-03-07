import { useState, useRef, useEffect } from "react";
import { Send, User, MessageSquare, DollarSign, X, ArrowLeft, ThumbsUp } from "lucide-react";

const ChatPage = ({ workerName }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [negotiating, setNegotiating] = useState(false);
  const [price, setPrice] = useState(50);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: `Thank you for your message! I'll be happy to assist you with that.`, 
        sender: "worker",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.history.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
              {workerName}
            </div>
            <div>
              <h1 className="text-lg font-semibold text-green-400">Chat with {workerName}</h1>
              <p className="text-xs text-gray-500">Online now</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setNegotiating(!negotiating)}
            className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <DollarSign size={16} />
            <span>${price}</span>
          </button>
        </div>
      </div>

      {/* Negotiation Bar */}
      {negotiating && (
        <div className="bg-yellow-50 p-4 border-b border-yellow-200 flex items-center justify-between">
          <div className="flex items-center gap-4 w-full">
            <DollarSign size={20} className="text-yellow-700" />
            <div className="flex-1">
              <p className="text-sm text-yellow-800 mb-1">Adjust price:</p>
              <input
                type="range"
                min="10"
                max="100"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-yellow-600"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>$10</span>
                <span>$100</span>
              </div>
            </div>
            <div className="text-lg font-bold text-yellow-800">${price}</div>
            <button 
              onClick={() => setNegotiating(false)}
              className="p-2 rounded-full hover:bg-yellow-100 text-yellow-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-3/4 rounded-b-sm p-3 ${
                msg.sender === "user" 
                  ? "bg-blue-500 text-white rounded-tr-none" 
                  : "bg-white text-gray-800 rounded-tl-none shadow"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {msg.sender === "user" ? 
                  <User size={16} className="text-blue-100" /> : 
                  <MessageSquare size={16} className="text-blue-500" />
                }
                <span className="text-xs opacity-70">{msg.time}</span>
              </div>
              <p>{msg.text}</p>
              {msg.sender === "worker" && (
                <div className="flex justify-end mt-2">
                  <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-blue-500">
                    <ThumbsUp size={12} />
                    <span>Helpful</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 rounded-lg rounded-tl-none p-3 shadow">
              <div className="flex gap-1">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-75">●</span>
                <span className="animate-bounce delay-150">●</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim()}
            className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;