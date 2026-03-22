DSA Interview Coach Bot
Overview

This project is a chatbot designed to help users prepare for Data Structures and Algorithms (DSA) interviews.
Instead of directly giving answers, it explains the problem, builds intuition, and then provides an optimized solution and Explanation.

Features
Structured responses (Problem → Approach → Solution)
Focus on interview-style explanations
Java-based solutions
Clean and responsive chat UI
Real-time interaction with AI
Tech Stack
Frontend
React (Vite)
Tailwind CSS
Backend
Node.js
Express.js
Groq API (LLM)
Project Structure
Chat-Bot/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── .env
Setup Instructions
1. Clone the repository
git clone <your-repo-link>
cd Chat-Bot
Backend Setup
cd backend
npm install

Create a .env file:

GROQ_API_KEY=your_api_key
PORT=5000

Run server:

npm run dev
Frontend Setup
cd frontend
npm install

Create a .env file:

VITE_API_URL=http://localhost:3000

Run frontend:

npm run dev
Usage
Open the frontend in browser
Type a DSA question (e.g., "Two Sum problem")
The bot will guide you step-by-step and provide a Java solution
Design Decisions
Used prompt engineering to control AI output format
Focused on structured learning instead of direct answers
Built modular frontend components for scalability
Future Improvements
Add support for multiple languages (Java, C++, Python)
Add code syntax highlighting
Add hint/solution toggle buttons
Store chat history
Deployment
Frontend can be deployed on Vercel
Backend can be deployed on Render / Railway
Demo

Vercel Link-

Author

Anshuman Shukla