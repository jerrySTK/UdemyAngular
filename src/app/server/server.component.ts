import { Component } from '@angular/core';

@Component({
    selector: 'naw-server',
    templateUrl: './server.component.html',
    styles:[`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId:number = 45;
    status:string = 'Online'

    constructor(){
        this.status = Math.random() > 0.5 ? 'online': 'offline';
    }
    getServerStatus():string {
        return this.status;
    }

    getColor(){
        return this.status === 'online' ? 'green': 'red';
    }

  
}