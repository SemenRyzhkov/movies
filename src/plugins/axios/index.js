import axios from 'axios';
import interceptors from './intercepters';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // params: {
    //     apiKey: process.env.VUE_APP_API_KEY,
    //     plot: 'full',
    //     i: tt0111161
    // }
})

interceptors(instance);  

export default instance;