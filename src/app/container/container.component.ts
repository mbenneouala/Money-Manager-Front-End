import { Component, OnInit } from '@angular/core';
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
  positive: boolean;

  constructor(private apiBankingOperationsService: ApiBankingOperationsService) { }

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
