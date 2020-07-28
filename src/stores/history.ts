import { writable } from 'svelte/store';
import { FeatureData } from '../models';

interface IHistoryState {
    history: FeatureData[];
}

const initialState: IHistoryState = {
    history: [
        new FeatureData(1, 'kalem', 1),
        new FeatureData(2, 'gül', 1),
        new FeatureData(3, 'kalemiyle yaşamak (veya geçinmek)', 2),
        new FeatureData(4, 'kalemine dolanmak', 2),
        new FeatureData(5, 'kalem savaşçısı', 3),
        new FeatureData(6, 'kalem erbabı', 3),
    ],
};

const { subscribe, set, update } = writable(initialState);

export const history = {
    subscribe,
    addHistoryItem: (historyItem: FeatureData) =>
        update((state) => ({
            ...state,
            history: state.history.concat([historyItem]),
        })),
    removeHistoryItem: (id: number) =>
        update((state) => ({
            ...state,
            history: state.history.filter((item) => item.id === id),
        })),
    reset: () => set(initialState),
};
