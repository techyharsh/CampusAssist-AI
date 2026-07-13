import "./Chat.css";
import { useState, useEffect, useRef } from "react";

function Chat() {
  // Input state
  const [message, setMessage] = useState("");

  // Chat messages state
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello Harsh! I'm CampusAssist AI. Ask me anything related to placements, coding, college or interviews."
    }
  ]);
    const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
  chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
}, [messages]);

  // Send message
  const handleSend = () => {

  if (message.trim() === "") return;

  const userMessage = {
    sender: "user",
    text: message
  };

  setMessages((prevMessages) => [
    ...prevMessages,
    userMessage
  ]);

  setMessage("");

  setIsTyping(true);

  setTimeout(() => {
    setIsTyping(false);

    const botReply = {
      sender: "bot",
      text: "🤖 Sorry, backend is under development."
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      botReply
    ]);

  }, 1500);

};

  return (
    <div className="chat-page">

      <div className="chat-container">

        {/* Header */}
        <div className="chat-header">
          <h2>🤖 CampusAssist AI</h2>
        </div>

        {/* Chat Body */}
        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, index) => (
            
            <div
              key={index}
              className={
                msg.sender === "bot"
                  ? "bot-message"
                  : "user-message"
              }
            >
              {msg.text}
              {isTyping && (
  <div className="bot-message">
    🤖 AI is typing...
  </div>
)}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="chat-input">
<input
  type="text"
  placeholder="Type your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
/>

          <button
  onClick={handleSend}
  disabled={message.trim() === ""}
>
  Send
</button>

        </div>

      </div>

    </div>
  );
}

export default Chat;