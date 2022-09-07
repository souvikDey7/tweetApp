import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { Button } from 'protractor';
import { SeasionStorageService } from '../seasion-storage.service';
import { LogginServiceService } from './login-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogginComponent implements OnInit {

  token: any = "";
  flag = 0;
  constructor(private serviceClass: LogginServiceService, private sessionStorage: SeasionStorageService) {
  }


  @Output() send = new EventEmitter<boolean>();
  @Output() registerShow = new EventEmitter<boolean>();

  sendToRoot() {
    this.send.emit(true)
  }

  ngOnInit(): void {
  }

  showRegister() {
    this.registerShow.emit(true)
  }

  Login(a: any) {
    this.serviceClass.login(a).subscribe(data => {
      this.token = data
      if (this.token.length > 17) {
        this.flag = 1
        this.sessionStorage.setKey("token", this.token)
        this.sessionStorage.setKey("userId", a["Login Id"])
        this.sendToRoot()
      } else
        this.flag = 0
    });
  }
}

