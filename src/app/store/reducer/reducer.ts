import { BankTransactionState } from '../state/state';
import * as BankTransactionActions from '../actions/actions';

// Initial state
export const initialState: BankTransactionState = {
    data: [],
    // error: ''
};

// REDUCER
export function reducer(
    state = initialState,
    action:
        BankTransactionActions.GetBankTransactionAction |
        BankTransactionActions.GetBankTransactionActionSuccess |
        BankTransactionActions.GetBankTransactionActionError

): BankTransactionState {
    switch (action.type) {
        case BankTransactionActions.GET_BANK_TRANSACTIONS: {
            return {
                ...state
            };
        }
        case BankTransactionActions.GET_BANK_TRANSACTIONS_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        }
        case BankTransactionActions.GET_BANK_TRANSACTIONS_ERROR: {
            return {
                ...state,
                // error: action.payload
            };
        }
    }
    return state;
}
