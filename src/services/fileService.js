import { baseUrl } from "../constants";

const getAll = async () => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    const response = await fetch(`${baseUrl}/file/get-user-files/`, {
        headers: {
            'ngrok-skip-browser-warning': "69420",
            Authorization: `Token ${token}`
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};


const uploadFile = async (formData) => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    formData.append('project_name', 'hi');
    formData.append('project_path', 'myFolder');

    const response = await fetch(`${baseUrl}/file/upload-file/`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`
        },
        body: formData
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    const analysis = await analyzePdf(data, 'hi', 'myFolder');
    return analysis;
};

const createProject = async (projectName) => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    const response = await fetch(`${baseUrl}/file/projects/create/`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ project_name: projectName })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};


const analyzePdf = async ({ filename, extension }, projectName, filePath) => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    const response = await fetch(`${baseUrl}/analyze/analyze-pdf/`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ file_path: `${projectName}/${filePath}/${filename}.${extension}`})
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const fileService = { getAll, createProject, uploadFile };