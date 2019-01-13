import { Component, OnInit, Input } from '@angular/core';
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

  /**
   * Constructor
   */
  constructor(private apiBankingOperationsService: ApiBankingOperationsService) { }

  printToto(event) {
    const stringToSplit = event.srcElement.innerText.split('');
    console.log(stringToSplit[stringToSplit.length - 2]);
  }

  ngOnInit() {
  }
}
