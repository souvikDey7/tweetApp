import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SeasionStorageService } from '../seasion-storage.service';
import { SearchService } from './search.service';

@Component({
  selector: 'search-tweet',
  templateUrl: './search-tweet.component.html',
  styleUrls: ['./search-tweet.component.css']
})
export class SearchTweetComponent implements OnInit {

  constructor(private searchService: SearchService, private sessionStorage: SeasionStorageService) {
  }


  prePost: any = ""
  tweet = new FormGroup(
    {
      post: new FormControl(this.prePost, Validators.required)
    }
  )
  msg: any = []
  reply: any = []
  ngOnInit(): void {
    if (this.sessionStorage.getKey('userId') !== null) {
      this.searchService.getAllTweetByAUserName().subscribe(
        data => { this.msg.push(data) })
    }
  }


  getAllTweetByAUserName() {
    this.msg = []
    if (this.sessionStorage.getKey('userId') !== null) {
      this.searchService.getAllTweetByAUserName().subscribe(
        data => {
          this.msg.push(data)
        }
      )
    }
  }

  Rflag = 0
  comment: any
  getReply(postId: any, post: any) {
    this.Rflag = 1
    this.comment = post
    if (this.sessionStorage.getKey('userId') !== null) {
      this.searchService.getReply(postId).subscribe(
        data => {
          this.reply.push(data)
          this.noReply(this.reply)
        }
      )
    }
  }

  hideReply() {
    this.Rflag = 0
    this.reply = []
    this.comment = ""
  }

  deleteTweet(postId: any) {
    if (this.sessionStorage.getKey('userId') !== null) {
      this.searchService.deleteTweet(postId).subscribe(
        data => {
          console.log(data)
          this.msg = []
          this.getAllTweetByAUserName()
        })
    }
  }

  postId: any
  flag = 0
  update(postId: any, post: any) {
    this.postId = postId
    this.flag = 1
    this.prePost = post
  }

  back() {
    this.flag = 0
  }

  h = 0;
  noReply(reply: any) {
    this.h = reply[0].length;
  }

  updateTweet() {
    if (this.sessionStorage.getKey('userId') !== null) {
      this.searchService.updateTweet(this.postId, {
        post: this.tweet.controls["post"].value
      }).subscribe(
        data => {
          console.log(data)
          this.msg = []
          this.getAllTweetByAUserName()
          this.flag = 0
        }
      )
    }
  }
}
