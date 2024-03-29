import { baseUrl } from "../constants";

const uploadFile = async (formData) => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const result = await fetch(`${baseUrl}/file/upload-file/`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`
        },
        body: formData
    });

    if (!result.ok) {
        const errorData = await result.json();
        throw new Error(errorData.message || 'An error occurred during file upload.');
    }

    return 'success';
};

export const fileService = { uploadFile };