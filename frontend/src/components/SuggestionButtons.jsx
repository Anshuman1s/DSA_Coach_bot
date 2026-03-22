const suggestions = [
  "Two Sum problem",
  "Binary Search explanation",
  "Reverse a Linked List",
  "Longest Substring Without Repeating Characters",
];

const SuggestionButtons = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-center">
      
      {suggestions.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className="px-3 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 border border-gray-600"
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default SuggestionButtons;