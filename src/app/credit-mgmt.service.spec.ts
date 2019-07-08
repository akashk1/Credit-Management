import { TestBed, inject } from '@angular/core/testing';

import { CreditMgmtService } from './credit-mgmt.service';

describe('CreditMgmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditMgmtService]
    });
  });

  it('should be created', inject([CreditMgmtService], (service: CreditMgmtService) => {
    expect(service).toBeTruthy();
  }));
});
