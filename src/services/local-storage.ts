import type { SearchItem } from '../models';

const SEARCH_RECENTS = 'SEARCH_RECENTS';

export const localStorageService = {
    getSearchRecents(): SearchItem[] {
        const data = localStorage.getItem(SEARCH_RECENTS);

        return data && data.length ? JSON.parse(data) : [];
    },
    setSearchRecents(searchRecents: SearchItem[]): void {
        localStorage.setItem(SEARCH_RECENTS, JSON.stringify(searchRecents));
    },
};
