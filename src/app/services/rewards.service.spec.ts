import { TestBed } from '@angular/core/testing';

import { RewardsService } from '../services/rewards.service';

describe('RewardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RewardsService = TestBed.get(RewardsService);
    expect(service).toBeTruthy();
  });
});
