import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { SeasionStorageService } from '../seasion-storage.service';
import { PostTweetServiceService } from './post-tweet-service.service';

@Component({
  selector: 'posttweet',
  templateUrl: './posttweet.component.html',
  styleUrls: ['./posttweet.component.css']
})
export class PosttweetComponent{

  constructor(private postService: PostTweetServiceService, private sessionStorage: SeasionStorageService) {
  }

  msg: any

  tweet = new FormGroup(
    {
      post: new FormControl('', Validators.required)
    }
  )
  postTweet() {
    if (this.sessionStorage.getKey('userId') === null) {
    }
    else {
      this.postService.uploadTweet1(
        {
          post: this.tweet.controls["post"].value
        }).subscribe(data => this.msg = data)
    }
  }


}
