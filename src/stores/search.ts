import { writable } from 'svelte/store';
import { localStorageServiceKey, localStorageService } from '../services';
import { Autocomplete, Search, Word } from '../models';

const MAX_SEARCH_RECENT_NUMBER = 5;

interface IStoreState {
    searchMode: boolean;
    searchTerm: string;
    searchResults: Word[];
    searchRecents: Search[];
    autocompleteData: Autocomplete[];
}

// @TODO: There should be a better way :(
type IStoreStateValueTypes =
    | IStoreState['searchMode']
    | IStoreState['searchTerm']
    | IStoreState['searchResults']
    | IStoreState['searchRecents']
    | IStoreState['autocompleteData'];

const initialState: IStoreState = {
    searchMode: false,
    searchTerm: '',
    searchResults: [],
    searchRecents: localStorageService.get(
        localStorageServiceKey.SEARCH_RECENTS,
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
        localStorageServiceKey.SEARCH_RECENTS,
        newSearchRecents,
    );

    return newSearchRecents;
};

const fetchResults = (): void =>
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
                .map((data) => new Word(data.madde)),
        };
    });

const reset = (): void =>
    update((state) => ({
        ...initialState,
        autocompleteData: state.autocompleteData,
    }));

export const search = {
    subscribe,
    fetchResults,
    set: (param: string, value: IStoreStateValueTypes): void =>
        update((state) => ({ ...state, [param]: value })),
    reset,
};
