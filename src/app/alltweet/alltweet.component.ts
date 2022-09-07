import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../search-tweet/search.service';
import { SeasionStorageService } from '../seasion-storage.service';
import { AlltweetService } from './alltweet.service';

@Component({
  selector: 'alltweet',
  templateUrl: './alltweet.component.html',
  styleUrls: ['./alltweet.component.css']
})
export class AlltweetComponent implements OnInit, DoCheck {

  constructor(private tweetService: AlltweetService, private searchService: SearchService, private sessionStorage: SeasionStorageService) {
    this.msg=[]
    this.currentPage=0
    if (this.sessionStorage.getKey('userId') !== null) {
      this.tweetService.getAllTweet(0).subscribe(
        data => { this.msg.push(data)
      })
    }
  }

  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
    this.msg=[]
    this.currentPage=0
    if (this.sessionStorage.getKey('userId') !== null) {
      this.tweetService.getAllTweet(0).subscribe(
        data => { this.msg.push(data)
      })
    }
  }

  tweet = new FormGroup(
    {
      post: new FormControl('', Validators.required)
    }
  )
  msg: any = []
  reply: any = []
  Rflag = 0
  comment: any
  postId: any
  flag = 0

  getAllTweet(pageNo: number) {
    this.msg=[]
    if (this.sessionStorage.getKey('userId') !== null) {
      this.tweetService.getAllTweet(pageNo).subscribe(
        data => { this.msg.push(data) 
          this.hide(this.msg)
        }
      )
    }
  }

  getReply(postId: any, post: any) {
    this.Rflag = 1
    this.comment = post
    if (this.sessionStorage.getKey('userId') !== null) {
      this.searchService.getReply(postId).subscribe(
        data => {this.reply.push(data)
          this.noReply(this.reply)
        })
    }
  }

  currentPage = 0;
  previous(pageNo: number) {
    this.msg = []
    this.getAllTweet(pageNo);
    this.currentPage -= 1
  }

  next(pageNo: number) {
    this.msg = []
    this.getAllTweet(pageNo);
    this.currentPage += 1
  }

  u = 0
  hide(msg: any) {
    this.u = msg[0].length;
    return this.u;
  }

  hideReply() {
    this.Rflag = 0
    this.reply = []
    this.comment = ""
  }

  postReply(postId: any, post: any) {
    this.flag = 1
    this.comment = post
    this.postId = postId
  }

  h = 0;
  noReply(reply: any) {
    this.h = reply[0].length;
  }

  sendReply() {
    if (this.sessionStorage.getKey('userId') !== null) {
      this.tweetService.postReply(this.postId,
        {
          post: this.tweet.controls["post"].value
        }).subscribe(
          data => {
            this.comment = data
            this.postId = ""
            this.flag = 0
            this.reply = []
            this.tweet.controls["post"].setValue("")
          }
        )
    }
  }

  checked = false
  likeFlag: any = []

  back() {
    this.flag = 0
  }

  disable(postId: any) {
    if (this.likeFlag.includes(postId))
      return true;
    else
      return null
  }

  like($event: any, postId: any) {
    if (this.sessionStorage.getKey('userId') !== null) {
      this.tweetService.postLike(postId, $event.target.checked).subscribe(
        data => {
          this.msg = []
          this.getAllTweet(this.currentPage)
          if ($event.target.checked == false) {
            var index = this.likeFlag.indexOf(postId)
            this.likeFlag.splice(index, 1)
          }
          else
            this.likeFlag.push(postId)

        })
    }
  }

}
