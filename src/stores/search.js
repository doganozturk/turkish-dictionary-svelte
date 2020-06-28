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
    autocompleteData: [],
};

const { subscribe, update } = writable(initialState);

export const search = {
    subscribe,
    fetchResults: () =>
        update((state) => ({
            ...state,
            searchResults: state.autocompleteData
                .filter(
                    (data) =>
                        data.madde.includes(state.searchTerm) &&
                        data.madde.indexOf(state.searchTerm) === 0,
                )
                .map((data) => data.madde),
        })),
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset: () =>
        update((state) => ({
            ...initialState,
            autocompleteData: state.autocompleteData,
        })),
};
