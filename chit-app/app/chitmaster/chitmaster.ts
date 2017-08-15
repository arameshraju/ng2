export class ChitMaster {
    chitname:String;
    chitvalue:number;
    chitmonths:number;
    chitsubscription:number;
    chitfundname:String;
    chitnote: String;
    constructor() {
        this.chitname = '';
        this.chitvalue = 0;
        this.chitmonths = 0;
        this.chitsubscription = 0;
        this.chitnote = '';
        this.chitfundname = 'SCF';
    }
    getSubscription(){
      if(this.chitvalue>0 &&   this.chitvalue>0){
          return this.chitvalue /this.chitmonths;
      }else{
      return 0;
      }
    }

}
