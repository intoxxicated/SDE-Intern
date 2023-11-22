import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.css'
})
export class AddItemsComponent {
 serverName='';
 newTask ='';
  public items:string[] = [];

  onAddTask(){
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }
  public ondeleteTask(index: number) {
    this.items.splice(index, 1);
  }
}

