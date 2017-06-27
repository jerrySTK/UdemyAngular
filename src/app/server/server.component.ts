import { Component } from '@angular/core';

@Component({
    selector: 'naw-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId:number = 45;
    status:string = 'Online'

    getServerStatus():string {
        return this.status;
    }
}