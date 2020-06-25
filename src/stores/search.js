import { writable } from 'svelte/store';

const initialState = {
    searchMode: false,
    searchTerm: '',
    searchResults: [],
    searchRecents: [
        {
            id: 1,
            word: 'kalem',
            type: 1,
        },
        {
            id: 9,
            word: 'feyz',
            type: 1,
        },
        {
            id: 5,
            word: 'kalem savaşçısı',
            type: 3,
        },
    ],
};

const { subscribe, set, update } = writable(initialState);

export const search = {
    subscribe,
    fetchResults: () =>
        update((state) => {
            // TODO: use 'state.searchTerm' to make API call!

            return {
                ...state,
                searchResults: [
                    'kalemiyle yaşamak (veya geçinmek)',
                    'kalem savaşçısı',
                    'kaleminden kan damlamak',
                    'kalem',
                ],
            };
        }),
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset: () => set(initialState),
};
