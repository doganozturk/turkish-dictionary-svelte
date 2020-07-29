import { writable } from 'svelte/store';

interface IDetailDeleteState {
    deletables: string[];
}

const initialState: IDetailDeleteState = {
    deletables: [],
};

const { subscribe, set, update } = writable(initialState);

const addDeletable = (deletable: string) =>
    update((state) => ({
        ...state,
        deletables: [...state.deletables, deletable],
    }));

const removeDeletable = (deletable: string) =>
    update((state) => ({
        ...state,
        deletables: state.deletables.filter((word) => word !== deletable),
    }));

export const detailDelete = {
    subscribe,
    addDeletable,
    removeDeletable,
    // @TODO: How to type this?
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset: () => set(initialState),
};
