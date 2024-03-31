import { baseUrl } from "../constants";

const sendPrompt = async (prompt, projectName, oldConversations) => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    const response = await fetch(`${baseUrl}/summary/query-project/`, {
        method: 'POST',
        headers: {
            'ngrok-skip-browser-warning': "69420",
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, project_name: projectName, old_conversations: oldConversations})
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const chatService = { sendPrompt };