import { writable } from 'svelte/store';

interface IDetailDeleteState {
    deletables: string[];
}

const initialState: IDetailDeleteState = {
    deletables: [],
};

const { subscribe, set, update } = writable(initialState);

const addDeletable = (deletable: string): void =>
    update((state) => ({
        ...state,
        deletables: [...state.deletables, deletable],
    }));

const removeDeletable = (deletable: string): void =>
    update((state) => ({
        ...state,
        deletables: state.deletables.filter((word) => word !== deletable),
    }));

export const detailDelete = {
    subscribe,
    addDeletable,
    removeDeletable,
    set: (param: string, value: string[]): void =>
        update((state) => ({ ...state, [param]: value })),
    reset: (): void => set(initialState),
};
