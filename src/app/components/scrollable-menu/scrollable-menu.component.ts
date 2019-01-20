import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BankingOperations } from 'src/app/models/bankingOperations';
import { ApiBankingOperationsService } from 'src/app/api-banking-operations.service';

@Component({
  selector: 'app-scrollable-menu',
  templateUrl: './scrollable-menu.component.html',
  styleUrls: ['./scrollable-menu.component.css']
})
export class ScrollableMenuComponent implements OnInit {

  /**
   * Attributes
   */
  @Input() bankingOperations: BankingOperations[];
  @Input() positive: boolean;
  bankTransactionToHandle: string;
  @Output() valueChange = new EventEmitter();


  /**
   * Constructor
   */
  constructor(private apiBankingOperationsService: ApiBankingOperationsService) { }

  valueChanged(pBankTransactionToHandle: any) {
    this.bankTransactionToHandle = pBankTransactionToHandle.srcElement.innerText;
    this.valueChange.emit(this.bankTransactionToHandle);
}

  ngOnInit() {
  }
}
