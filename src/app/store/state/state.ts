import { BankingOperations } from '../../models/bankingOperations';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { reducer } from '../reducer/reducer';

export interface BankTransactionState {
    data: BankingOperations[];
    // error: string;
}

// State de notre feature
export interface ElementsState {
    bankTransactionsState: BankTransactionState;
}

// Reducers pour notre state
export const reducers: ActionReducerMap<ElementsState> = {
    bankTransactionsState: reducer
};

// SELECTORS
export const getElementsState = createFeatureSelector<ElementsState>('elements');
export const getBankTransactionsState = createSelector(getElementsState, (state: ElementsState) => state.bankTransactionsState);

