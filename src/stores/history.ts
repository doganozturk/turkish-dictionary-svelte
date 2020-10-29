import { writable } from 'svelte/store';
import type { Word } from '../models';
import { localStorageServiceKey, localStorageService } from '../services';

interface IHistoryState {
    history: Word[];
}

const initialState: IHistoryState = {
    history: localStorageService.get(localStorageServiceKey.HISTORY),
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
                localStorageServiceKey.HISTORY,
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
                localStorageServiceKey.HISTORY,
                updatedHistory,
            );

            return {
                history: updatedHistory,
            };
        }),
    reset: (): void => {
        localStorageService.set(
            localStorageServiceKey.HISTORY,
            initialState.history,
        );

        set(initialState);
    },
};
