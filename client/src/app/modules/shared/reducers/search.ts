// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const SEARCH_SET = 'SEARCH_SET';

export function searchTxtReducer(state: string = "", action: Action) {
	switch (action.type) {
		case SEARCH_SET:
			return action.payload;
		default:
			return state;
	}
}