const Loader = () => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-2 bg-gray-700 px-4 py-3 rounded-2xl w-fit">
        
        <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
        <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse delay-200"></span>
        <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse delay-400"></span>

      </div>
    </div>
  );
};

export default Loader;