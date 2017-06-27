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
  constructor() {
    
  }

  ngOnInit() {
    setTimeout(()=>{ this.allowNewServer =  true },2000);
  }

  onServerCreate() {
    this.serverCreated = true;
    
  }

  onUpdateServerName(data: Event){
    console.log(data);
    this.serverName = (<HTMLInputElement>data.target).value;
  }

  resetUName(){
    this.uname = '';
  }
}
