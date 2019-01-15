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
  stringToSplit: string;

  @Output() valueChange = new EventEmitter();
  counter = 0;


  /**
   * Constructor
   */
  constructor(private apiBankingOperationsService: ApiBankingOperationsService) { }

  printToto(event) {
    this.stringToSplit = event.srcElement.innerText.split('');
    console.log(this.stringToSplit[this.stringToSplit.length - 2]);
  }

  valueChanged(event) { // You can give any function name
    this.stringToSplit = event.srcElement.innerText;
    console.log('child', this.stringToSplit);
    this.valueChange.emit(this.stringToSplit);
}

  ngOnInit() {
  }
}
