import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeasionStorageService } from '../seasion-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor(private https: HttpClient, private sessionStorage: SeasionStorageService) { }

  getAllUserBySearchedUserName(userId: string,pageNo: number) {
    let url = "http://54.157.36.31:8083/api/v1.0/tweets/user/search/" + userId
    let header = new HttpHeaders();
    header = header.set('page',pageNo.toString())
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.get(url, { 'headers': header, responseType: 'json' })
  }

  getAllUser(pageNo:number) {

    let url = "http://54.157.36.31:8083/api/v1.0/tweets/users/all"
    let header = new HttpHeaders();
    header = header.set('page',pageNo.toString())
    header = header.set('Content-Type', 'application/json; charset=UTF-8 ')
    let token = this.sessionStorage.getKey('token')
    header = header.set('Token-key', (token === null) ? '' : token)
    return this.https.get(url, { 'headers': header, responseType: 'json' })
  }
}
