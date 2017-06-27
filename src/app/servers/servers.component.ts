import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = "No server was created";
  serverName = '';
  serverCreated = false;
  uname= '';
  servers = ['Server 1','Server 2','Server 3'];
  displayDetails:boolean = false;
  counter:Array<number> = [];
  count:number = 0;

  constructor() {
    
  }

  ngOnInit() {
    setTimeout(()=>{ this.allowNewServer =  true },2000);
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(data: Event){
    console.log(data);
    this.serverName = (<HTMLInputElement>data.target).value;
  }

  resetUName(){
    this.uname = '';
  }

    showDetails(){
        this.displayDetails = !this.displayDetails;
        let x = this.count++
        this.counter.push(x);
    }

    getColor(itemIndex: number){
      if (itemIndex >= 5){
        return 'blue';
      }
      else
      {
        return '';
      }
    }
}
