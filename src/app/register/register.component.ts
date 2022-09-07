import { ThrowStmt } from '@angular/compiler';
import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emit } from 'process';
import { SeasionStorageService } from '../seasion-storage.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: RegisterService, private sessionStorage: SeasionStorageService) { }
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      ContactNumber: new FormControl('', Validators.required),
      Login_Id: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      RePassword: new FormControl('', Validators.required)
    }
  )

  error = ""; flag = 0
  message: string = ""

  @Output() send = new EventEmitter<boolean>();
  @Output() loginShow = new EventEmitter<boolean>();

  showLogin() {
    this.loginShow.emit(true)
  }
  
  sendToRoot() {
    this.send.emit(true)
  }

  ValidPassword() {
    if (this.registerForm.controls["Password"].value === this.registerForm.controls["RePassword"].value)
      return true;
    else return false;
  }

  register() {
    if (!this.ValidPassword()) {
      this.error = "wrong password !!!! re enter It"
    }
    else {
      this.error = ""
      var UserDetails = {  // convert into JSON 
        "First Name": this.registerForm.controls["firstName"].value,
        "last name": this.registerForm.controls["lastName"].value,
        "Email": this.registerForm.controls["Email"].value,
        "ContactNumber": this.registerForm.controls["ContactNumber"].value,
        "cridential": {
          "Login Id": this.registerForm.controls["Login_Id"].value,
          "Password": this.registerForm.controls["Password"].value
        }
      }
      this.service.register(UserDetails).subscribe(UserDetail => {
        this.message = UserDetail
        if (this.message === '' || this.message === 'duplicate entry') {
          this.flag = 0
        }
        else {
          this.flag = 1
          this.sessionStorage.setKey("token", this.message)
          this.sessionStorage.setKey("userId", UserDetails.cridential['Login Id'])
          this.message = ""
          this.sendToRoot();
        }
      })
    }
  }
}
