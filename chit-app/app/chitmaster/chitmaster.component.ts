import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ChitMaster } from './chitmaster';

@Component({
  selector: 'chit-master',
  templateUrl :  "../dist/views/chitmaster.html"
})
export class ChitMasterComponent {

    yourname = 'Ramesh';
    issubmitted='false';
    cm=new ChitMaster();

    onSubmit() {
        this.issubmitted='true';
        console.log(this.cm);
      }


}
