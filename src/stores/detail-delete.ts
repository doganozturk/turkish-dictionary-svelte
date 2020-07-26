import { writable } from 'svelte/store';

interface IDetailDeleteState {
    deletables: number[];
}

const initialState: IDetailDeleteState = {
    deletables: [],
};

const { subscribe, set, update } = writable(initialState);

const addDeletable = (deletable: number) =>
    update((state) => ({
        ...state,
        deletables: [...state.deletables, deletable],
    }));

const removeDeletable = (deletable: number) =>
    update((state) => ({
        ...state,
        deletables: state.deletables.filter((id) => id !== deletable),
    }));

export const detailDelete = {
    subscribe,
    addDeletable,
    removeDeletable,
    // @TODO: How to type this?
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset: () => set(initialState),
};
