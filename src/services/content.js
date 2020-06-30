import tdk from '../apis/tdk';

export const contentService = {
    getContent() {
        return tdk.get('/icerik');
    },
};
