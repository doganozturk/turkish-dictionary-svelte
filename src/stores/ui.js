import { writable } from 'svelte/store';

export const uiStore = writable();

uiStore.set({
    overlay: false,
    about: false,
});
