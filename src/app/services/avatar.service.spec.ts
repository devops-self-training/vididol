import { TestBed } from '@angular/core/testing';

import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvatarService = TestBed.inject(AvatarService);
    expect(service).toBeTruthy();
  });
});
