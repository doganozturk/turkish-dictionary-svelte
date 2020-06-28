import TDKAPI from '../apis/tdk-api';

export const contentService = {
    getContent() {
        return TDKAPI.get('/icerik');
    },
};
