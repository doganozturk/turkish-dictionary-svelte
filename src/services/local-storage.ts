export enum LOCAL_STORAGE_SERVICE_KEY {
    SEARCH_RECENTS = 'SEARCH_RECENTS',
    HISTORY = 'HISTORY',
    FAVORITE = 'FAVORITE',
}

export const localStorageService = {
    get<T>(key: LOCAL_STORAGE_SERVICE_KEY): T[] {
        const data = localStorage.getItem(key);

        return data && data.length ? JSON.parse(data) : [];
    },
    set<T>(key: LOCAL_STORAGE_SERVICE_KEY, items: T[]): void {
        localStorage.setItem(key, JSON.stringify(items));
    },
};
