import tdk from '../apis/tdk';

export const contentService = {
    getContent() {
        return tdk.get('/icerik');
    },
    getWordDetail(word) {
        return tdk.get('/yazim', { params: { ara: word } });
    },
    getGts(word) {
        return tdk.get('/gts', { params: { ara: word } });
    },
};
