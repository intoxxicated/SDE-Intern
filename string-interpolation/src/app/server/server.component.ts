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
  serverStatus = 'offline'; 
  serverPort = 1443; 
  allowNewServer = false;
  serverCreationStatus='No Server was Created !!';
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
    this.serverCreationStatus='Server is Created !!';
  }

}
