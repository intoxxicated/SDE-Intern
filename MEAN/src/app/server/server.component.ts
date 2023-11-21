import { Component } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
@Component({
    selector:'app-server',
    standalone:true,
    imports:[NavBarComponent],
    templateUrl:'./server.component.html',
    styleUrl:'./server.component.css'
})
export class ServerComponent{

}