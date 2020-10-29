// @TODO: This could be a generic? A FeatureStoreFactory perhaps? Both for history and favorite.
// @TODO: history and favorite should have a max number like searchRecents?

import { writable } from 'svelte/store';
import type { Word } from '../models';
import { localStorageServiceKey, localStorageService } from '../services';

interface IFavoriteState {
    favorite: Word[];
}

const initialState: IFavoriteState = {
    favorite: localStorageService.get(localStorageServiceKey.FAVORITE),
};

const { subscribe, set, update } = writable(initialState);

export const favorite = {
    subscribe,
    // @TODO: What is return type of this?
    addFavoriteItem: (favoriteItem: Word): void =>
        update((state) => {
            if (
                state.favorite.some((item) => item.word === favoriteItem.word)
            ) {
                return state;
            }

            const updatedFavorite = state.favorite.concat([favoriteItem]);

            localStorageService.set(
                localStorageServiceKey.FAVORITE,
                updatedFavorite,
            );

            return {
                favorite: updatedFavorite,
            };
        }),
    // @TODO: What is return type of this?
    removeFavoriteItem: (word: string): void =>
        update((state) => {
            const updatedFavorite = state.favorite.filter(
                (item) => item.word !== word,
            );

            localStorageService.set(
                localStorageServiceKey.FAVORITE,
                updatedFavorite,
            );

            return {
                favorite: updatedFavorite,
            };
        }),
    reset: (): void => {
        localStorageService.set(
            localStorageServiceKey.FAVORITE,
            initialState.favorite,
        );

        set(initialState);
    },
};
