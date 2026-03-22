import { useState, useRef, useEffect } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage = { role: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Network Erorr...." },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      
      {/* Header */}
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        .
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {messages.length === 0 && (
          <div className="text-gray-400 text-center mt-20">
           What’s confusing you right now?
            <div className="mt-2">“Type and Send”</div>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xl p-3 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-600 ml-auto"
                : "bg-gray-700"
            }`}
          >
            <pre className="whitespace-pre-wrap">{msg.text}</pre>
          </div>
        ))}

        {loading && (
          <div className="bg-gray-700 p-3 rounded-lg w-fit">
            Thinking....
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-700 flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-600 outline-none "
          placeholder="Ask your DSA question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-300 px-4 rounded hover:bg-blue-400 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;