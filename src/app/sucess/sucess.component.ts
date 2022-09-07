import { Component, OnInit } from '@angular/core';
import { SeasionStorageService } from '../seasion-storage.service'

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})

export class SucessComponent implements OnInit {

  constructor(private session: SeasionStorageService) { }

  ngOnInit(): void {
  }

  
  getToken() {
    if (this.session.getKey('userId') === null)
      return true;
    return false;
  }

  user = false
  allTweet = true
  post = false
  AllUser() {
    this.user = true
    this.allTweet = false
    this.post = false
  }

  AllTweet() {
    this.allTweet = true
    this.user = false
    this.post = false
  }

  Post() {
    this.post = true;
    this.allTweet = false
    this.user = false
  }
  LogOut() {
    this.session.logout();
  }
}
