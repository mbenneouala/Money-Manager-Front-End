import { Action } from '@ngrx/store';

export const GET_BANK_TRANSACTIONS = '[Money Manager] Get bank transactions';
export const GET_BANK_TRANSACTIONS_SUCCESS = '[Money Manager] Get bank transactions event success';
export const GET_BANK_TRANSACTIONS_ERROR = '[Money Manager] Get bank transactions error';

// Les actions
export class GetBankTransactionAction implements Action {
    readonly type = GET_BANK_TRANSACTIONS;
}

export class GetBankTransactionActionSuccess implements Action {
    readonly type = GET_BANK_TRANSACTIONS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetBankTransactionActionError implements Action {
    readonly type = GET_BANK_TRANSACTIONS_ERROR;
    constructor(public payload: any) { }
}
