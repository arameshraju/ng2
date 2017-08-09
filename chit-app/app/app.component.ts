import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: "<h1>Hello {{yourname}},</h1> <p>Welcome to your first angular2 application </p> <p>Thank you <br/>Angular 4.3.3</p>"
})
export class AppComponent  {
    yourname = 'Ramesh';

}
