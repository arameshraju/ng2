import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ChitMasterComponent }  from './chitmaster/chitmaster.component';
import { ChitTransComponent }  from './transaction/chittrans.component';
const appRoutes: Routes = [
{ path: 'chitmaster', component: ChitMasterComponent },
 { path: 'chittrans',   component: ChitTransComponent },
  { path: '',
    redirectTo: '/chitmaster',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:      [
    BrowserModule,FormsModule, RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      ) ],
  declarations: [ AppComponent,ChitMasterComponent,ChitTransComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
