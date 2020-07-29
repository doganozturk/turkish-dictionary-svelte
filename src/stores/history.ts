import { writable } from 'svelte/store';
import type { Word } from '../models';

interface IHistoryState {
    history: Word[];
}

const initialState: IHistoryState = {
    history: [],
};

const { subscribe, set, update } = writable(initialState);

export const history = {
    subscribe,
    addHistoryItem: (historyItem: Word) =>
        update((state) => ({
            ...state,
            history: state.history.concat([historyItem]),
        })),
    removeHistoryItem: (word: string) =>
        update((state) => ({
            ...state,
            history: state.history.filter((item) => item.word === word),
        })),
    reset: () => set(initialState),
};
