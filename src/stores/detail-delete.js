import { writable } from 'svelte/store';

const initialState = {
    deletables: [],
};

const { subscribe, set, update } = writable(initialState);

export const detailDelete = {
    subscribe,
    addDeletable: (deletable) =>
        update((state) => ({
            ...state,
            deletables: [...state.deletables, deletable],
        })),
    removeDeletable: (deletable) =>
        update((state) => ({
            ...state,
            deletables: state.deletables.filter((id) => id !== deletable),
        })),
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset: () => set(initialState),
};
