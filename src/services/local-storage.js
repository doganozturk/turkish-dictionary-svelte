const SEARCH_RECENTS = 'SEARCH_RECENTS';

export const localStorageService = {
    getSearchRecents() {
        const data = localStorage.getItem(SEARCH_RECENTS);

        return data && data.length ? JSON.parse(data) : [];
    },
    setSearchRecents(searchRecents) {
        localStorage.setItem(SEARCH_RECENTS, JSON.stringify(searchRecents));
    },
};
