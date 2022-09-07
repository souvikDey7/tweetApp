import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucessRoutingModule } from './sucess-routing.module';
import { SearchTweetComponent } from '../search-tweet/search-tweet.component';
import { PosttweetComponent } from '../posttweet/posttweet.component';
import { AlltweetComponent } from '../alltweet/alltweet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SucessComponent } from './sucess.component';
import { AllUserComponent } from '../all-user/all-user.component';


@NgModule({
  declarations: [SucessComponent, SearchTweetComponent, PosttweetComponent,
     AlltweetComponent,
    AllUserComponent],
  imports: [
    CommonModule,
    SucessRoutingModule,
    HttpClientModule, ReactiveFormsModule
  ]
})
export class SucessModule { }
