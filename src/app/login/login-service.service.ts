import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginServiceService {

  
  constructor(private http: HttpClient) { }
  login(credential: any) {
    let header = new HttpHeaders();
   header= header.set('Access-Control-Allow-Origin', '*');
   header= header.set('Access-Control-Allow-Methods', 'POST,OPTIONS');
   header= header.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');
    let url = "http://18.212.6.131:8083/api/v1.0/tweets/login"
    return this.http.post(url, credential,{
      'headers': header
      , responseType: 'text' as 'json'
    });
  }
}
