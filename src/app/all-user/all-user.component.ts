import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SeasionStorageService } from '../seasion-storage.service';
import { AllUserService } from './all-user.service';

@Component({
  selector: 'all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  constructor(private userService: AllUserService, private sessionStorage: SeasionStorageService) {
    if (this.sessionStorage.getKey('userId') !== null) {
      this.userService.getAllUser(0).subscribe(
        data => {
          this.user.push(data),
            this.currentPage += 1
        })
    }
  }
  currentPage = 0;

  ngOnInit(): void {

  }

  search = new FormGroup(
    {
      name: new FormControl('', Validators.required)
    }
  )

  user: any = []
  aUser: any = []
  sHide = true
  uHide = false

  currentSearch=0
  previousSearch(pageNo: number) {
    this.searchUser(pageNo);
    this.currentSearch -= 1
  }

  nextSearch(pageNo: number) {
    this.searchUser(pageNo);
    this.currentSearch += 1
  }

  searchUser(pageNo: number) {
    this.aUser = []
    this.userService.getAllUserBySearchedUserName(this.search.controls["name"].value,pageNo).subscribe(
      data => {
        this.aUser.push(data)
        this.uHide = true
        this.sHide = false
        this.hide(this.aUser)
      }
    )

  }

  h = 0
  hide(aUser: any) {
    this.h = aUser[0].length;
    return this.h;
  }
  u = 0
  userHide(user: any) {
    this.u = user[0].length;
    return this.u;
  }

  getAllUser(pageNo: number) {
    this.user = []
    this.userService.getAllUser(pageNo).subscribe(
      data => {
        this.user.push(data)
        this.sHide = true
        this.uHide = false
        this.userHide(this.user)
      })
  }

  previous(pageNo: number) {
    this.getAllUser(pageNo);
    this.currentPage -= 1
  }

  next(pageNo: number) {
    this.getAllUser(pageNo);
    this.currentPage += 1
  }


}
