import { writable } from 'svelte/store';
import { LOCAL_STORAGE_SERVICE_KEY, localStorageService } from '../services';
import { Autocomplete, Search } from '../models';

const MAX_SEARCH_RECENT_NUMBER = 5;

interface IStoreState {
    searchMode: boolean;
    searchTerm: string;
    searchResults: string[];
    searchRecents: Search[];
    autocompleteData: Autocomplete[];
}

const initialState: IStoreState = {
    searchMode: false,
    searchTerm: '',
    searchResults: [],
    searchRecents: localStorageService.get(
        LOCAL_STORAGE_SERVICE_KEY.SEARCH_RECENTS,
    ),
    autocompleteData: [],
};

const { subscribe, update } = writable(initialState);

const updateRecents = (state: IStoreState): Search[] => {
    if (state.searchRecents.some((item) => item.word === state.searchTerm)) {
        return state.searchRecents;
    }

    let newSearchRecents: Search[] = [];

    newSearchRecents =
        state.searchRecents.length === MAX_SEARCH_RECENT_NUMBER
            ? state.searchRecents.filter((_, i) => i !== 0)
            : state.searchRecents;

    newSearchRecents = [
        ...newSearchRecents,
        new Search(newSearchRecents.length + 1, state.searchTerm),
    ];

    localStorageService.set(
        LOCAL_STORAGE_SERVICE_KEY.SEARCH_RECENTS,
        newSearchRecents,
    );

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
    // @TODO: How to type this?
    set: (param, value) => update((state) => ({ ...state, [param]: value })),
    reset,
};
