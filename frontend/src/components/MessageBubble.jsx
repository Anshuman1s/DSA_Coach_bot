const MessageBubble = ({ role, text }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      
      <div
        className={`max-w-xl px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-700 text-gray-100 rounded-bl-none"
        }`}
      >
        <pre className="whitespace-pre-wrap">{text}</pre>
      </div>

    </div>
  );
};

export default MessageBubble;