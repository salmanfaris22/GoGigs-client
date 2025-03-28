import api from "./api";


export const login = async (data) => {
        const response = await api.post('/login', data, { withCredentials: true });
        return response.data;
};

