import tdk from '../apis/tdk';
import type { AxiosError, AxiosResponse } from 'axios';

type ContentResponse = {
    kelime: { madde: string; anlam: string }[];
    atasoz: { madde: string; anlam: string }[];
};

export const contentService = {
    getContent(): Promise<
        AxiosResponse<{ data: ContentResponse; error: AxiosError }>
    > {
        return tdk.get('/icerik');
    },
    getWordDetail(word: string): Promise<AxiosResponse> {
        return tdk.get('/yazim', { params: { ara: word } });
    },
    getGts(word: string): Promise<AxiosResponse> {
        return tdk.get('/gts', { params: { ara: word } });
    },
};
