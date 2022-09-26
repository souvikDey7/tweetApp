import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeasionStorageService } from '../seasion-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private https: HttpClient, private sessionStorage: SeasionStorageService) { }
  url = "http://18.212.6.131:8083/api/v1.0/tweets/usernames?userid="
  
  getAllTweetByAUserName() {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('page', '1')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.get(this.url + this.sessionStorage.getKey('userId'), { 'headers': header, responseType: 'json' })
  }

  deleteTweet(postId: any) {
    let url = "http://18.212.6.131:8083/api/v1.0/tweets/" + this.sessionStorage.getKey('userId') + "/delete/" + postId
    let header = new HttpHeaders();
    header = header.set('page', '1')
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.delete(url, { 'headers': header, responseType: 'text' as 'json' })
  }

  updateTweet(postId: any,body:any) {
    let url = "http://18.212.6.131:8083/api/v1.0/tweets/" + this.sessionStorage.getKey('userId') + "/update/" + postId
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.post(url,body, { 'headers': header, responseType: 'text' as 'json' })
  }

  getReply(postId:any) {
    let header = new HttpHeaders();
    let url="http://18.212.6.131:8083/api/v1.0/tweets/reply/"
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.get(url +postId, { 'headers': header, responseType: 'json' })
  }
}
