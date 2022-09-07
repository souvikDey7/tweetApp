import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LogginServiceService } from './login/login-service.service';
import { RegisterComponent } from './register/register.component';
import { PosttweetComponent } from './posttweet/posttweet.component';
import { SearchTweetComponent } from './search-tweet/search-tweet.component';
import { RouterModule } from '@angular/router';
import { LikeTweetComponent } from './like-tweet/like-tweet.component';
import { appRoutingModule } from './app-routing.module';
import { LogginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeTweetComponent,
    RegisterComponent,
    LogginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    appRoutingModule, ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
