import { writable } from 'svelte/store';

interface IUiState {
    overlay: boolean;
    about: boolean;
    snackbar: {
        text: string;
        icon: string;
    };
}

const initialState: IUiState = {
    overlay: false,
    about: false,
    snackbar: {
        text: '',
        icon: '',
    },
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
    showSnackbar: function ({
        text,
        icon,
        animationDuration = 2000,
    }: {
        text: string;
        icon: string;
        animationDuration?: number;
    }): void {
        update((state) => ({
            ...state,
            snackbar: {
                text,
                icon,
            },
        }));

        setTimeout(() => {
            update((state) => ({
                ...state,
                snackbar: initialState.snackbar,
            }));
        }, animationDuration);
    },
    reset: (): void => set(initialState),
};
