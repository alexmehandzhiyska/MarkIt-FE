import { baseUrl } from "../constants";
import { chatService } from "./chatService.js";

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
    formData.append('project_name', 'diyan');
    formData.append('project_path', 'docs');

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

    const extension = formData.get('file').name.split('.')[1];  

    const analyzeFunction = endpointsByExtension[extension];

    const analysis = await analyzeFunction(data, "diyan", "docs", formData);
    const summary = await chatService.sendPrompt('Give me statistics', formData.get('project_name'), []);
    return summary;
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


export const analyzePdf = async ({ filename, extension }, projectName, filePath, formData) => {
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

export const analyzeMp4 = async ({ filename, extension }, projectName, filePath, formData) => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    formData.append('file_path', `${projectName}/${filePath}/${filename}.${extension}`)

    const response = await fetch(`${baseUrl}/analyze/analyze-video/`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`,
        },
        body: formData
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const analyzeAudio = async ({ filename, extension }, projectName, filePath, formData) => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    formData.append('file_path', `${projectName}/${filePath}/${filename}.${extension}`)

    const response = await fetch(`${baseUrl}/analyze/analyze-audio/`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`,
        },
        body: formData
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const endpointsByExtension = {
    "mp4": analyzeMp4,
    "mp3": analyzeAudio,
    "pdf": analyzePdf,
};

export const fileService = { getAll, createProject, uploadFile };