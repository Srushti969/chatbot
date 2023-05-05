import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module'
import {AngularBotModule} from './angularbot/angularbot.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ AppComponent ],
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularBotModule,
    BrowserAnimationsModule
  ],
  providers : [],
  
  bootstrap:    [ AppComponent ]

    
  
})
export class AppModule { }