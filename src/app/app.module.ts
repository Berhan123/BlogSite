import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    PostComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
