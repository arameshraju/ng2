import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ChitMasterComponent }  from './chitmaster/chitmaster.component';
import { ChitTransComponent }  from './transaction/chittrans.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ChitMasterComponent,ChitTransComponent ],
  bootstrap:    [ AppComponent,ChitTransComponent ]
})
export class AppModule { }
