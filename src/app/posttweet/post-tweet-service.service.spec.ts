import { TestBed } from '@angular/core/testing';

import { PostTweetServiceService } from './post-tweet-service.service';

describe('PostTweetServiceService', () => {
  let service: PostTweetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTweetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
