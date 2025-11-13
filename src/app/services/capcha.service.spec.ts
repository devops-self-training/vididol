import { TestBed } from '@angular/core/testing';

import { CapchaService } from './capcha.service';

describe('CapchaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapchaService = TestBed.inject(CapchaService);
    expect(service).toBeTruthy();
  });
});
