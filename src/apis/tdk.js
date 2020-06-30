import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sozluk.gov.tr',
});

instance.interceptors.response.use(
    (response) => ({ data: response.data }),
    (error) => ({ error: error.message }),
);

export default instance;
