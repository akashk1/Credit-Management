import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCreditComponent } from './send-credit.component';

describe('SendCreditComponent', () => {
  let component: SendCreditComponent;
  let fixture: ComponentFixture<SendCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
