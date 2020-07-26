import { writable } from 'svelte/store';
import { FeatureDataItem } from '../models';

interface IHistoryState {
    history: FeatureDataItem[];
}

const initialState: IHistoryState = {
    history: [
        new FeatureDataItem(1, 'kalem', 1),
        new FeatureDataItem(2, 'gül', 1),
        new FeatureDataItem(3, 'kalemiyle yaşamak (veya geçinmek)', 2),
        new FeatureDataItem(4, 'kalemine dolanmak', 2),
        new FeatureDataItem(5, 'kalem savaşçısı', 3),
        new FeatureDataItem(6, 'kalem erbabı', 3),
    ],
};

const { subscribe, set, update } = writable(initialState);

export const history = {
    subscribe,
    addHistoryItem: (historyItem: FeatureDataItem) =>
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
