import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import {HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { PeopleComponent } from './views/people/people.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    PeopleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
