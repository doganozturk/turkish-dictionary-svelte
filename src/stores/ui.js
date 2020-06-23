import { writable } from 'svelte/store';

const initialState = {
    overlay: false,
    about: false,
};

const { subscribe, set, update } = writable(initialState);

export const ui = {
    subscribe,
    toggle: (param) =>
        update((state) => ({ ...state, [param]: !state[param] })),
    activate: (param) => update((state) => ({ ...state, [param]: true })),
    deactivate: (param) => update((state) => ({ ...state, [param]: false })),
    reset: () => set(initialState),
};
