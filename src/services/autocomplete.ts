// @ts-ignore
import data from '../../public/data/autocomplete.json';
import type { AutocompleteItem } from '../models';

export const autocompleteService = {
    getAutocompleteData(): AutocompleteItem[] {
        return data;
    },
};
