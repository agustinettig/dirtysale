import axios from "axios";

const api = axios.create({
    baseURL: process.env.RISK_BASE_URL || '',
});

let token: string = "";

api.interceptors.request.use(
    config => {
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

api.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._retry) {
        
        originalRequest._retry = true;
        await refreshToken();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return api(originalRequest);
    }
    return Promise.reject(error);
});

async function refreshToken() {
    const tokenEndpoint = (process.env.RISK_BASE_URL || '') + process.env.TOKEN_ENDPOINT;
    const response = await axios.post(tokenEndpoint, {
        grant_type: process.env.TOKEN_GRANT_TYPE,
        client_id: process.env.TOKEN_CLIENT_ID,
        client_secret: process.env.TOKEN_CLIENT_SECRET,
        scope: process.env.TOKEN_SCOPE
    });
    token = response.data.access_token;
}

export { api };