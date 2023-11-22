import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId =10;
  serverStatus = false;
  serverPort = 1443;
  serverName='';
  allowNewServer = false;
  serverCreationStatus='No New Server Created Yet !!';
  constructor()
  {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  getServerPort()
  {
    return this.serverPort;
  }
  onCreateServer()
  {
    this.serverStatus=true;
    this.serverCreationStatus='New Server is Created !!';
  }
  onUpdateServerName(event: Event){

    this.serverName= (<HTMLInputElement>event.target).value;
  }
  getColor()
  {
    return this.serverStatus ? '#DAF7A6': 'red';
  }
}
