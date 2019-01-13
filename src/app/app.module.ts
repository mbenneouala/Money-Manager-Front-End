// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { TableOfOperationsComponent } from './table-of-operations/table-of-operations.component';
import { ContainerComponent } from './container/container.component';

// Anuglar Material
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

// PrimeNG
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {TableModule} from 'primeng/table';             //Turbo table
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {FieldsetModule} from 'primeng/fieldset';
import {SliderModule} from 'primeng/slider';


// PrimeNG: Animations with Angular 4+
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import {HighlightDirective} from 'src/app/directives/highlight.directive';
import { TableOfBankTransactionsComponent } from './components/table-of-bank-transactions/table-of-bank-transactions.component';
import { ScrollableMenuComponent } from './components/scrollable-menu/scrollable-menu.component';
import { TransactionCategorisationComponent } from './components/transaction-categorisation/transaction-categorisation.component';
import { BankTransactionHandlingComponent } from './components/bank-transaction-handling/bank-transaction-handling.component';


@NgModule({
  declarations: [
    AppComponent,
    TableOfOperationsComponent,
    ContainerComponent,
    HighlightDirective,
    TableOfBankTransactionsComponent,
    ScrollableMenuComponent,
    TransactionCategorisationComponent,
    BankTransactionHandlingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    TableModule,
    BrowserAnimationsModule,
    AccordionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatInputModule,
    MatTabsModule,
    InputTextareaModule,
    RadioButtonModule,
    ButtonModule,
    ScrollPanelModule,
    TabViewModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    FieldsetModule,
    SliderModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
