import { TestBed } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('ServiceSecurityService', () => {
  let service: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
