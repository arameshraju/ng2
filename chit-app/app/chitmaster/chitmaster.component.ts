import { Component } from '@angular/core';
import { ChitMaster } from './chitmaster';

@Component({
  selector: 'chit-master',
  templateUrl :  "../dist/views/chitmaster.html"
})
export class ChitMasterComponent  {
    yourname = 'Ramesh';
    cm=new ChitMaster('10L 20 Chits',1000000,25,40000,'SMC','TEST');
      

}
