import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BankingOperations } from 'src/app/models/bankingOperations';
import { ApiBankingOperationsService } from 'src/app/api-banking-operations.service';
import { Observable } from 'rxjs';
import { BankTransactionState } from 'src/app/store/state/state';

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
  @Input() bankTransactionsFromStore$: Observable<BankTransactionState>;
  @Input() positive: boolean;
  @Output() valueChange = new EventEmitter();

  public bankTransactionToHandle: string;

  /**
   * Constructor
   */
  constructor() { }

  valueChanged(pBankTransactionToHandle: any) {
    this.bankTransactionToHandle = pBankTransactionToHandle.srcElement.innerText;
    this.valueChange.emit(this.bankTransactionToHandle);
  }

  ngOnInit() {

  }
}
