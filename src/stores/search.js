import { writable } from 'svelte/store';
import { localStorageService } from '../services';

const MAX_SEARCH_RECENT_NUMBER = 10;

const initialState = {
    searchMode: false,
    searchTerm: '',
    searchResults: [],
    searchRecents: localStorageService.getSearchRecents(),
    autocompleteData: [],
};

const { subscribe, update } = writable(initialState);

const updateRecents = (state) => {
    if (state.searchRecents.some((item) => item.word === state.searchTerm)) {
        return state.searchRecents;
    }

    let newSearchRecents = [];

    newSearchRecents =
        state.searchRecents.length === MAX_SEARCH_RECENT_NUMBER
            ? state.searchRecents.filter((_, i) => i !== 0)
            : state.searchRecents;

    newSearchRecents = [
        ...newSearchRecents,
        {
            // @TODO: There is some sort of 'id: -1' problem here :\
            id: newSearchRecents.length - 1,
            word: state.searchTerm,
        },
    ];

    localStorageService.setSearchRecents(newSearchRecents);

    return newSearchRecents;
};

const fetchResults = () =>
    update((state) => {
        if (state.searchTerm.length <= 1) {
            return state;
        }

        return {
            ...state,
            searchRecents: updateRecents(state),
            searchResults: state.autocompleteData
                .filter(
                    (data) =>
                        data.madde.includes(state.searchTerm) &&
                        data.madde.indexOf(state.searchTerm) === 0,
                )
                .map((data) => data.madde),
        };
    });

const reset = () =>
    update((state) => ({
        ...initialState,
        autocompleteData: state.autocompleteData,
    }));

export const search = {
    subscribe,
    fetchResults,
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset,
};
