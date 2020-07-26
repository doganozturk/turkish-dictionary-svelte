import { writable } from 'svelte/store';

interface IUiState {
    overlay: boolean;
    about: boolean;
}

const initialState: IUiState = {
    overlay: false,
    about: false,
};

const { subscribe, set, update } = writable(initialState);

export const ui = {
    subscribe,
    // @TODO: How to type these?
    toggle: (param) =>
        update((state) => ({ ...state, [param]: !state[param] })),
    activate: (param) => update((state) => ({ ...state, [param]: true })),
    deactivate: (param) => update((state) => ({ ...state, [param]: false })),
    reset: () => set(initialState),
};
