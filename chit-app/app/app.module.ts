import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ChitMasterComponent }  from './chitmaster/chitmaster.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ChitMasterComponent ],
  bootstrap:    [ AppComponent,ChitMasterComponent ]
})
export class AppModule { }
