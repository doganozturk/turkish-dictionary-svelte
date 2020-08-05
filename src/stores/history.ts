import { writable } from 'svelte/store';
import type { Word } from '../models';
import { LOCAL_STORAGE_SERVICE_KEY, localStorageService } from '../services';

interface IHistoryState {
    history: Word[];
}

const initialState: IHistoryState = {
    history: localStorageService.get(LOCAL_STORAGE_SERVICE_KEY.HISTORY),
};

const { subscribe, set, update } = writable(initialState);

export const history = {
    subscribe,
    // @TODO: What is return type of this?
    addHistoryItem: (historyItem: Word): void =>
        update((state) => {
            if (state.history.some((item) => item.word === historyItem.word)) {
                return state;
            }

            const updatedHistory = state.history.concat([historyItem]);

            localStorageService.set(
                LOCAL_STORAGE_SERVICE_KEY.HISTORY,
                updatedHistory,
            );

            return {
                history: updatedHistory,
            };
        }),
    // @TODO: What is return type of this?
    removeHistoryItem: (word: string): void =>
        update((state) => {
            const updatedHistory = state.history.filter(
                (item) => item.word !== word,
            );

            localStorageService.set(
                LOCAL_STORAGE_SERVICE_KEY.HISTORY,
                updatedHistory,
            );

            return {
                history: updatedHistory,
            };
        }),
    reset: (): void => {
        localStorageService.set(
            LOCAL_STORAGE_SERVICE_KEY.HISTORY,
            initialState.history,
        );

        set(initialState);
    },
};
