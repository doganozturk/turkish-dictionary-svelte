import { writable } from 'svelte/store';

const initialState = {
    history: [
        {
            id: 1,
            word: 'kalem',
            type: 1, // Sözcük
        },
        {
            id: 2,
            word: 'gül',
            type: 1,
        },
        {
            id: 3,
            word: 'kalemiyle yaşamak (veya geçinmek)',
            type: 2, // Atasözleri & Deyimler
        },
        {
            id: 4,
            word: 'kalemine dolamak',
            type: 2,
        },
        {
            id: 5,
            word: 'kalem savaşçısı',
            type: 3, // Birleşik Kelimeler
        },
        {
            id: 6,
            word: 'kalem erbabı',
            type: 3,
        },
    ],
};

const { subscribe, set, update } = writable(initialState);

export const history = {
    subscribe,
    addHistoryItem: (historyItem) =>
        update((state) => ({
            ...state,
            history: state.history.concat([historyItem]),
        })),
    removeHistoryItem: (id) =>
        update((state) => ({
            ...state,
            history: state.history.filter((item) => item.id === id),
        })),
    reset: () => set(initialState),
};
