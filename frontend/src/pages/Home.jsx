import ChatBox from "../components/ChatBox.jsx";

const Home = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-xl font-bold"> DSA Coach Bot</h1>
        <span className="text-sm text-gray-400 font-semibold">
          Let's Prepare For Interview
        </span>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 overflow-hidden">
        <ChatBox />
      </div>

    </div>
  );
};

export default Home;