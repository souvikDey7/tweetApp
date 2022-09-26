import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
 
  url = "http://18.212.6.131:8083/api/v1.0/tweets/register/"
 
  register(UserDetails: any) {
    return this.http.post(this.url, UserDetails, {
      responseType:
        "text"
    })
  }
}
