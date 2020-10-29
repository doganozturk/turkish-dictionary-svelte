export enum localStorageServiceKey {
    SEARCH_RECENTS = 'SEARCH_RECENTS',
    HISTORY = 'HISTORY',
    FAVORITE = 'FAVORITE',
}

export const localStorageService = {
    get<T>(key: localStorageServiceKey): T[] {
        const data = localStorage.getItem(key);

        return data && data.length ? JSON.parse(data) : [];
    },
    set<T>(key: localStorageServiceKey, items: T[]): void {
        localStorage.setItem(key, JSON.stringify(items));
    },
};
