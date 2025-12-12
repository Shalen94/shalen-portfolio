import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";
import useChatFlow from "./ChatFlow";

const ChatBot = () => {
  const chatFlow = useChatFlow();
  const [history, setHistory] = useState([
    { from: "bot", text: chatFlow.start.message },
  ]);
  const [currentStep, setCurrentStep] = useState("start");
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const chatEndRef = useRef(null);

  const step = chatFlow[currentStep];
  const stepOptions = step.options.map((o) => o.text);

  const filteredOptions =
    inputValue.trim() === ""
      ? stepOptions
      : stepOptions.filter((opt) =>
          opt.toLowerCase().includes(inputValue.toLowerCase())
        );

  // ⭐ AUTO SCROLL TO BOTTOM WHEN NEW MESSAGE ARRIVES
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleSend = () => {
    const selected = step.options.find(
      (opt) => opt.text.toLowerCase() === inputValue.toLowerCase()
    );

    if (!selected) return;

    setHistory((prev) => [...prev, { from: "user", text: selected.text }]);

    const nextStep = selected.next;

    if (chatFlow[nextStep]) {
      setHistory((prev) => [
        ...prev,
        { from: "bot", text: chatFlow[nextStep].message },
      ]);
      setCurrentStep(nextStep);
    }

    setInputValue("");
    setIsFocused(false);
  };

  return (
    <div>
      {/* Floating Button */}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-container neon-border">

          {/* ⭐ CLOSE BUTTON */}
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          <h2 className="neon-title">Chat With Us</h2>

          <div className="chat-window">
            {history.map((msg, i) => (
              <div
                key={i}
                className={`msg ${msg.from} neon-bubble`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              ></div>
            ))}

            {/* SCROLL TARGET */}
            <div ref={chatEndRef} />
          </div>


          <div className="input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Type or select option..."
            />

            <button
              onClick={handleSend}
              disabled={
                !stepOptions.some(
                  (opt) => opt.toLowerCase() === inputValue.toLowerCase()
                )
              }
            >
              Send
            </button>
          </div>

          {isFocused && filteredOptions.length > 0 && (
            <ul className="suggestions">
              {filteredOptions.map((opt, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setInputValue(opt);
                    handleSend();
                  }}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
