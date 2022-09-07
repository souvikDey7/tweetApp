import { TestBed } from '@angular/core/testing';

import { AlltweetService } from './alltweet.service';

describe('AlltweetService', () => {
  let service: AlltweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlltweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
