import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTransactionHandlingComponent } from './bank-transaction-handling.component';

describe('BankTransactionHandlingComponent', () => {
  let component: BankTransactionHandlingComponent;
  let fixture: ComponentFixture<BankTransactionHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTransactionHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTransactionHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
