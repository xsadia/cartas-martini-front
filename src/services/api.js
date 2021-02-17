import axios from 'axios';

const api = axios.create({
    baseURL: "https://cartasmartini-api.herokuapp.com/"
});

export default api;