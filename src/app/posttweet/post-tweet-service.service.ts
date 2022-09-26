import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeasionStorageService } from '../seasion-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostTweetServiceService {

  constructor(private http: HttpClient, private sessionStorage: SeasionStorageService) { }

  url = "http://18.212.6.131:8083/api/v1.0/tweets/"


  uploadTweet1(data: any) {
    let token = this.sessionStorage.getKey('token')
    let header = new HttpHeaders()
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    header = header.set('Token-key', (token === null) ? '' : token)
    header = header.set("Access-Control-Allow-Origin", "*");
    header = header.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    header = header.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    return this.http.post(this.url + this.sessionStorage.getKey('userId') + "/add", JSON.stringify(data), {
      'headers': header
      , responseType: 'text' as 'json'
    })
  }
}
