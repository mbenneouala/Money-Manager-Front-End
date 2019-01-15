import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BankingOperations } from '../../models/bankingOperations';

@Component({
  selector: 'app-bank-transaction-handling',
  templateUrl: './bank-transaction-handling.component.html',
  styleUrls: ['./bank-transaction-handling.component.css']
})
export class BankTransactionHandlingComponent implements OnInit {

  /**
   *  Attributes
   */
  @Input() bankingOperations: BankingOperations[];
  @Input() operationManagement: BankingOperations;
  @Input() stringToSplit: string;

  constructor() { }



  ngOnInit() {
  }

}
