import { writable } from 'svelte/store';

const initialState = {
    deletables: [],
};

const { subscribe, set, update } = writable(initialState);

const addDeletable = (deletable) =>
    update((state) => ({
        ...state,
        deletables: [...state.deletables, deletable],
    }));

const removeDeletable = (deletable) =>
    update((state) => ({
        ...state,
        deletables: state.deletables.filter((id) => id !== deletable),
    }));

export const detailDelete = {
    subscribe,
    addDeletable,
    removeDeletable,
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset: () => set(initialState),
};
