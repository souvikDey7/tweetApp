import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TweetApp';

  home = false
  register = false
  login = true
  of = false

  // showRegister(a: boolean) {
  //   this.register = a
  //   this.login = false
  // }
  // showLogin(a: boolean) {
  //   this.login = a
  //   this.register = false
  // }

  showRegister(a: boolean) {
  //  console.log(a, "Registration show")
    this.register=a
    this.login=false
  }

  showLogin(a: boolean) {
    //console.log(a, "Registration show")
    this.register=false
    this.login=a
  }

  result(a: boolean) {
    this.home = a;
    this.auto()
  }

  auto() {
    let b: HTMLElement = document.getElementById("search") as HTMLElement;
    b.click();
  }
}
