import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginServiceService {

  
  constructor(private http: HttpClient) { }
  login(credential: any) {
    let url = "http://54.157.36.31:8083/api/v1.0/tweets/login"
    return this.http.post(url, credential, { responseType: 'text' as 'json' });
  }
}
