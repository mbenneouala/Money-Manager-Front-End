import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiBankingOperationsService } from 'src/app/api-banking-operations.service';
import * as BankTransactionActions from '../actions/actions';

@Injectable()
export class Effects {
    movieService: any;
    constructor(private action$: Actions,
        private bankingOperationsService: ApiBankingOperationsService) { }

    @Effect()
    loadBankTransactions$ = this.action$.pipe(
        ofType(BankTransactionActions.GET_BANK_TRANSACTIONS),
        mergeMap((action) =>
            this.bankingOperationsService.getBankingOperations().pipe(
                map((bankTransaction) => new BankTransactionActions.GetBankTransactionActionSuccess(bankTransaction)),
                catchError((error) => of(new BankTransactionActions.GetBankTransactionActionError(error)))
            )),
    );

    // @Effect()
    // loadBankTransactions$ = this.action$.ofType(BankTransactionActions.GET_BANK_TRANSACTIONS)
    //     .pipe(
    //         switchMap((action) => {
    //             return this.bankingOperationsService.getBankingOperations()
    //                 .pipe(
    //                     map(bankTransaction => new BankTransactionActions.GetBankTransactionActionSuccess(bankTransaction)),
    //                     catchError(error => of(new BankTransactionActions.GetBankTransactionActionError(error)))
    //                 );
    //         }));
}
