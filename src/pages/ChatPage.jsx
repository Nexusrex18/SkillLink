import { useState } from "react";
import { Send, User, MessageSquare, DollarSign, X } from "lucide-react";

const ChatPage = ({ workerName }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [negotiating, setNegotiating] = useState(false);
  const [price, setPrice] = useState(50);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: `Thank you for your message!`, sender: "worker" }]);
    }, 1000);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center relative">
      {negotiating && (
        <div className="absolute top-0 left-0 right-0 bg-white shadow-lg p-4 border-b border-gray-300 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Negotiate Price</h2>
          <input 
            type="range" 
            min="10" 
            max="500" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="w-3/4"
          />
          <p className="mt-2 text-lg font-bold text-green-700">${price}</p>
          <button 
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => setNegotiating(false)}
          >Close</button>
        </div>
      )}

      <div className="w-full h-full bg-gradient-to-b from-green-50 to-white shadow-lg border border-gray-200 overflow-hidden flex flex-col">
        <div className="bg-green-600 text-white p-4 font-semibold flex justify-between items-center">
          <span>Chat with {workerName}</span>
          <button className="bg-red-500 text-white px-3 py-1 rounded-lg" onClick={() => window.history.back()}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 rounded-lg ${msg.sender === "user" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                {msg.sender === "user" ? <User className="inline-block w-4 h-4 mr-1" /> : <MessageSquare className="inline-block w-4 h-4 mr-1" />} {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 flex border-t border-gray-300">
          <input 
            type="text" 
            className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none" 
            placeholder="Type your message..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button className="bg-green-600 text-white p-2" onClick={handleSendMessage}>
            <Send className="w-5 h-5" />
          </button>
          <button className="bg-blue-500 text-white p-2 ml-2 rounded-r-lg" onClick={() => setNegotiating(true)}>
            <DollarSign className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
