const BASE_URL = "http://localhost:5000";

export const sendMessageToBot = async (message) => {
  try {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response");
    }

    const data = await response.json();
    return data.reply;

  } catch (error) {
    console.error("API Error:", error);
    return "Something went wrong ❌";
  }
};