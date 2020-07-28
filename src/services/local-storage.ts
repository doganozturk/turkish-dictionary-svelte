import type { Search } from '../models';

const SEARCH_RECENTS = 'SEARCH_RECENTS';

export const localStorageService = {
    getSearchRecents(): Search[] {
        const data = localStorage.getItem(SEARCH_RECENTS);

        return data && data.length ? JSON.parse(data) : [];
    },
    setSearchRecents(searchRecents: Search[]): void {
        localStorage.setItem(SEARCH_RECENTS, JSON.stringify(searchRecents));
    },
};
