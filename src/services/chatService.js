import { baseUrl } from "../constants";
// old_conversations

const sendPrompt = async (prompt, projectName, oldConversations) => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const obj = { prompt: "What is the average money that the clients would be willing to pay?", project_name: "diyan", old_conversations: []}

    const response = await fetch(`${baseUrl}/summary/query-project/`, {
        method: 'POST',
        headers: {
            'ngrok-skip-browser-warning': "69420",
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const chatService = { sendPrompt };