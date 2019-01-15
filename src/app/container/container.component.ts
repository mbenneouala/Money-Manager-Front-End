import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import * as XLSX from 'ts-xlsx';
import { Router } from '@angular/router';
import { BankingOperations } from '../models/bankingOperations';
import { ApiBankingOperationsService } from '../api-banking-operations.service';
import { Observable } from 'rxjs';


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
  public stringToSplit: string;
  public operationManagement: BankingOperations;

  constructor(private apiBankingOperationsService: ApiBankingOperationsService) { }

  displayCounter(stringToSplit) {
    this.stringToSplit = stringToSplit;
    const lastSpaceCharacter = this.stringToSplit.split(' ');
    const currentOperation: BankingOperations = {
      bankingOperationValue: lastSpaceCharacter[(lastSpaceCharacter.length) - 1],
      bankingOperationLabel: lastSpaceCharacter[(lastSpaceCharacter.length) - 1]
    };
    this.operationManagement = currentOperation;

    // this.operationManagement.bankingOperationValue = lastSpaceCharacter[(lastSpaceCharacter.length) - 1];
    // this.operationManagement.bankingOperationLabel = lastSpaceCharacter[(lastSpaceCharacter.length) - 1];
    // this.operationManagement.bankingOperationDate = lastSpaceCharacter[(lastSpaceCharacter.length) - 2];
    // this.operationManagement.bankingOperationCategory = lastSpaceCharacter[0];
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
        if (+data[i].bankingOperationValue < 0) {
          this.positive = false;
          // console.log(this.positive, +data[i].bankingOperationValue);
        } else {
          this.positive = true;
          // console.log(this.positive, +data[i].bankingOperationValue);
        }
      }
    });
  }

  ngOnInit() {
    this.getBankingOperations();
    this.setBankTransactionColor();
  }
}
