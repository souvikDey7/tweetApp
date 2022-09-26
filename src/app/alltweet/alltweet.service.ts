import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeasionStorageService } from '../seasion-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AlltweetService {

  constructor(private https: HttpClient, private sessionStorage: SeasionStorageService) { }

  url = "http://18.212.6.131:8083/api/v1.0/tweets/all"

  getAllTweet(pageNo: number) {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('page', pageNo.toString())
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.get(this.url, { 'headers': header, responseType: 'json' })
  }


  postReply(postId: any, body: any) {
    let header = new HttpHeaders();
    let url = "http://18.212.6.131:8083/api/v1.0/tweets/" + this.sessionStorage.getKey('userId') + '/reply/' + postId
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.post(url, body, { 'headers': header, responseType: 'text' as 'json' })
  }

  postLike(postId: any, flag: boolean) {
    let header = new HttpHeaders();
    let url = "http://18.212.6.131:8083/api/v1.0/tweets/" + this.sessionStorage.getKey('userId') + '/like/' + postId + "?flag=" + flag
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.put
      (url, '', { 'headers': header, responseType: 'text' as 'json' })
  }
}
