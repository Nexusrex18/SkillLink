import { useState } from "react";
import { Send, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const services = [
  { name: "Painter", slug: "painter", response: "We offer professional painting services! Click below to explore more." },
  { name: "Mechanic", slug: "mechanic", response: "Need a mechanic? We've got you covered with top-notch auto repairs." },
  { name: "Mason", slug: "mason", response: "Looking for a skilled mason? Our professionals specialize in brick, stone, and concrete work." }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    
    const foundService = services.find(service => input.toLowerCase().includes(service.name.toLowerCase()));
    
    setTimeout(() => {
      const botMessage = foundService
        ? { text: foundService.response, sender: "bot", slug: foundService.slug }
        : { text: "Sorry, I couldn't understand that. Try asking about our services: Painter, Mechanic, Mason.", sender: "bot" };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInput("");
  };

  return (
    <div>
      {/* Help Button */}
      <div className="fixed bottom-5 left-5">
        <button 
          className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaQuestionCircle size={20} />
          <span>Help</span>
        </button>
      </div>
      
      {/* Chatbot UI */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-green-600 text-white p-4 font-semibold text-center">Service Chatbot</div>
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 rounded-lg ${msg.sender === "user" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                  {msg.sender === "bot" && <Bot className="inline-block w-4 h-4 mr-1" />} {msg.text}
                  {msg.slug && (
                    <button 
                      onClick={() => navigate(`/services/${msg.slug}`)}
                      className="block mt-2 text-green-600 underline text-sm"
                    >
                      View {msg.slug.charAt(0).toUpperCase() + msg.slug.slice(1)}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 flex border-t border-gray-300">
            <input 
              type="text" 
              className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none" 
              placeholder="Ask me about our services..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="bg-green-600 text-white p-2 rounded-r-lg" onClick={handleSendMessage}>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
