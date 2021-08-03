import { TestBed } from '@angular/core/testing';

import { BillingService } from '../services/billing.service';

describe('BillingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingService = TestBed.get(BillingService);
    expect(service).toBeTruthy();
  });
});
