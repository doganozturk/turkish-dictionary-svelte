import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://sozluk.gov.tr',
});

instance.interceptors.response.use(
    (response) => ({ data: response.data } as AxiosResponse),
    (error) => ({ error: error.message }),
);

export default instance;
