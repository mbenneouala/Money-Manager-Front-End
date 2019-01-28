import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ElementsState, getElementsState, getBankTransactionsState, BankTransactionState } from './state/state';
import { GetBankTransactionAction } from './actions/actions';
import { Observable } from 'rxjs';
import { BankingOperations } from '../models/bankingOperations';


@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(private store: Store<ElementsState>) { }

    /* SELECTOR */
    getBankTransactions(): Observable<BankTransactionState> {
        return this.store.select<BankTransactionState>(getBankTransactionsState);
    }

    /* DISPATCHER */
    readBankTransactions() {
        this.store.dispatch(new GetBankTransactionAction);
    }

}
