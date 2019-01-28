import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import * as XLSX from 'ts-xlsx';
import { Router } from '@angular/router';
import { BankingOperations } from '../models/bankingOperations';
import { ApiBankingOperationsService } from '../api-banking-operations.service';
import { Observable } from 'rxjs';
import { StoreService } from '../store/store-service';
import { BankTransactionState } from '../store/state/state';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],

})
export class ContainerComponent implements OnInit {

  /**
   * Attributes
   */
  public bankingOperations: BankingOperations[];
  public bankTransactions$: Observable<BankingOperations[]> = this.apiBankingOperationsService.getBankingOperations();
  public positive: boolean;
  public bankTransactionToHandle: string;
  public operationManagement: BankingOperations;
  public bankTransactionLabel: string;
  bankTransactionsFromStore$: Observable<BankTransactionState>;
  // public bankTransactionsFromStore$: Observable<BankTransactionState> = this.storeService.readBankTransactions();

  constructor(
    private apiBankingOperationsService: ApiBankingOperationsService,
    private storeService: StoreService) { }

  HandleBankTransaction(banktransaction: string) {
    this.bankTransactionToHandle = banktransaction;
    /* Split the bank transaction to get label, value & date separatly */
    const lastSpaceCharacter = this.bankTransactionToHandle.split(' ');
    /* Get first element of the bank transaction (operation type: CB, virmt, ...) */
    this.bankTransactionLabel = lastSpaceCharacter[0];
    /* Get bank transaction LABEL */
    for (let _i = 1; _i < (lastSpaceCharacter.length) - 2; _i++) {
      this.bankTransactionLabel = this.bankTransactionLabel + ' ' + lastSpaceCharacter[_i];
    }
    /* Current bank transaction to handle, displayed on click */
    const currentOperation: BankingOperations = {
      bankingOperationValue: lastSpaceCharacter[(lastSpaceCharacter.length) - 1],
      bankingOperationDate: lastSpaceCharacter[(lastSpaceCharacter.length) - 2],
      bankingOperationLabel: this.bankTransactionLabel
    };
    this.operationManagement = currentOperation;
  }

  /**
  * Get bank transactions from REST API
  */
  public getBankingOperations(): void {
    this.bankTransactions$.subscribe(data => {
      this.bankingOperations = data;
    });
  }

  /**
   * Set bank transaction color
   */
  setBankTransactionColor() {
    this.apiBankingOperationsService.getBankingOperations().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (Number(data[i].bankingOperationValue) < 0) {
          this.positive = false;
          // console.log(this.positive, Number(data[i].bankingOperationValue));
        } else {
          this.positive = true;
          // console.log(this.positive, Number(data[i].bankingOperationValue));
        }
      }
    });
  }

  ngOnInit() {
    this.getBankingOperations();
    this.setBankTransactionColor();

    /* Get data from REST API (with ngrx/effects) */
    this.bankTransactionsFromStore$ = this.storeService.getBankTransactions();

    /* Read data from store */
    this.storeService.readBankTransactions();
  }
}
