import * as data from '../../public/data/autocomplete.json';
import type { Autocomplete } from '../models';

export const autocompleteService = {
    getAutocompleteData(): Autocomplete[] {
        return data;
    },
};
