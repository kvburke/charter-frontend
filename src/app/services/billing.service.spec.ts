import { TestBed } from '@angular/core/testing';

import { BillingService } from '../components/customer-bill/billing.service';

describe('BillingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingService = TestBed.get(BillingService);
    expect(service).toBeTruthy();
  });
});
