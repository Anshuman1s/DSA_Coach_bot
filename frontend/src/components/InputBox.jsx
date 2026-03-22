import { useState } from "react";
import InputBox from "./InputBox";
const InputBox = ({ onSend, loading }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="p-4 border-t border-gray-700 flex gap-2 bg-gray-900">
      
      <input
        className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none text-white"
        placeholder="Ask your DSA question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500 disabled:opacity-50 cursor-pointer"
      >
        {loading ? " " : "Send"}
      </button>

    </div>
  );
};

export default InputBox;