import { writable } from 'svelte/store';

export const detailDeleteStore = writable();

detailDeleteStore.set([]);
