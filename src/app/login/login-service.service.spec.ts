import { TestBed } from '@angular/core/testing';

import { LogginServiceService } from './login-service.service';

describe('LogginServiceService', () => {
  let service: LogginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
