import axios from 'axios';

const API_LOCAL = 'http://localhost:4000/videos';
const API_REMOTO = 'https://videos-backend-47rw.onrender.com/videos';

// Testar se o link remoto está funcionando
const getActiveUrl = async () => {
    try {
        await axios.get(API_REMOTO);
        return API_REMOTO;
    } catch (error) {
        return API_LOCAL;
    }
};

const VideoService = {
    /* Pegar todos os cards existentes */
    getAll: async () => {
        const url = await getActiveUrl();
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    /* Pegar o card existente pelo seu ID */
    getById: async (id) => {
        const url = await getActiveUrl();
        try {
            const response = await axios.get(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error while fetching video ${id}: `, error);
        }
    },

    /* Criar um novo card */
    create: async (videoData) => {
        const url = await getActiveUrl();
        try {
            const response = await axios.post(url, videoData);
            return response.data;
        } catch (error) {
            console.error(`Error while creating video: `, error);
        }
    },

    /* Atualizar um card existente pelo seu id */
    update: async (id, videoData) => {
        const url = await getActiveUrl();
        try {
            const response = await axios.put(`${url}/${id}`, videoData);
            return response.data;
        } catch (error) {
            console.error(`Error while creating video: `, error);
        }
    },

    /* Apagar um card existente pelo seu id */
    delete: async (id) => {
        const url = await getActiveUrl();
        try {
            const response = await axios.delete(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error while creating video: `, error);
        }
    }
}

export default VideoService;