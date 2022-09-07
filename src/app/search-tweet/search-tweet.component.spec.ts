import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTweetComponent } from './search-tweet.component';

describe('SearchTweetComponent', () => {
  let component: SearchTweetComponent;
  let fixture: ComponentFixture<SearchTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
