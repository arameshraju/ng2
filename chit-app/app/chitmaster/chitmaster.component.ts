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
    cm=new ChitMaster('',0,0,0,'','');
    cms:ChitMaster[]=[
    {chitname:'cn1',chitvalue:10,chitmonths:1,chitsubscription:10,chitfundname:'',chitnote:''},
    {chitname:'cn2',chitvalue:20,chitmonths:2,chitsubscription:10,chitfundname:'',chitnote:''},
    {chitname:'cn3',chitvalue:30,chitmonths:3,chitsubscription:10,chitfundname:'',chitnote:''}

    ];
    onSubmit() {
        this.issubmitted='true';
        console.log(this.cm);
      }


}
