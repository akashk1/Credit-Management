import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMgmtComponent } from './credit-mgmt.component';

describe('CreditMgmtComponent', () => {
  let component: CreditMgmtComponent;
  let fixture: ComponentFixture<CreditMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
