import TDKAPI from './tdk-api';

export const contentService = {
    getContent() {
        return TDKAPI.get('/icerik');
    },
};
