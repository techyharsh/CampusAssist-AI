import "./Chat.css";
import { useState, useEffect, useRef } from "react";

function Chat() {
  // Input state
  const [message, setMessage] = useState("");

  // Chat messages state
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello Harsh! I'm CampusAssist AI. Ask me anything related to placements, coding, college or interviews.",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),   
    }
  ]);
    const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
  chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
}, [messages]);

  // Send message
  const handleSend = () => {

  if (message.trim() === "" || isTyping) return;

  const userMessage = {
    sender: "user",
    text: message,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
      text: "🤖 Sorry, backend is under development.",
      time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
    };

    setMessages((prevMessages) => [...prevMessages,botReply]);
      // setTyping(false);

  }, 1500);

};

const handleClearChat = () => {

  setMessages([
    {
      sender: "bot",
      text: "👋 Hello Harsh! I'm CampusAssist AI. Ask me anything related to placements, coding, college or interviews.",
     time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    },
  ]);

};

  return (
    <div className="chat-page">

      <div className="chat-container">

        {/* Header */}
        <div className="chat-header">
            <div className="header-left">

          <h2>🤖 CampusAssist AI</h2>
            <h3>⚡ Online</h3>

        </div>
        <button
    className="clear-btn"
    onClick={handleClearChat}
  >
    Clear Chat
  </button>

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

              <p className="message-time">
    {msg.time}
  </p>
              </div>
          ))}
              {isTyping && (
  <div className="bot-message typing">
    🤖 AI is typing...
  </div>
)}
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
  disabled={!message.trim()}
>
  Send
</button>

        </div>

      </div>

    </div>
  );
}

export default Chat;