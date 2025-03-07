// import { useState } from "react";

// export default function ChatBox({ worker }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (input.trim() !== "") {
//       setMessages([...messages, { text: input, sender: "user" }]);
//       setInput("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg flex flex-col">
//         {/* Worker Info Section */}
//         <div className="flex items-center border-b pb-2 mb-4">
//           <img src={worker.profilePicture} alt="Worker" className="w-12 h-12 rounded-full mr-3" />
//           <div>
//             <h2 className="text-lg font-bold text-gray-800">{worker.name}</h2>
//             <p className={text-sm ${worker.isOnline ? 'text-green-500' : 'text-red-500'}}>
//               {worker.isOnline ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>
        
//         {/* Chat Messages */}
//         <div className="flex-1 overflow-y-auto mb-4 h-80 border p-3 rounded-lg bg-gray-50">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={p-2 my-1 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-green-500 text-white self-end" : "bg-gray-300 text-gray-800 self-start"}}
//             >
//               {msg.text}
//             </div>
//           ))}
//         </div>

//         {/* Input Section */}
//         <div className="flex items-center border-t pt-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Type a message..."
//           />
//           <button
//             onClick={sendMessage}
//             className="ml-2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }