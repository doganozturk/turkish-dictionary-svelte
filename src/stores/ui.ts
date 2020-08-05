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
    // @TODO: There should be a better way of typing this 'param' parameters?
    toggle: (param: string): void =>
        update((state) => ({ ...state, [param]: !state[param] })),
    activate: (param: string): void =>
        update((state) => ({ ...state, [param]: true })),
    deactivate: (param: string): void =>
        update((state) => ({ ...state, [param]: false })),
    reset: (): void => set(initialState),
};
