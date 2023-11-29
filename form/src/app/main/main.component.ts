import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatCardModule, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {



  email = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$")]);
  address = new FormControl('');
  name = new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$"), Validators.minLength(2)]);
  phone = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)]);
  password = new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]+$"), Validators.minLength(8)]);
  hide = true;
  submit=false;

  getNameError() {

      if (this.name.hasError('required')) {
          return 'You must enter a value';
      }

    return this.name.hasError('name') ? '' : 'Not a valid Name';


  }
  getEmailError() {
    if (this.email.hasError('required')) {
        return 'You must enter a value';
    }

    return this.email.hasError('email') ? '' : 'Not a valid Email';


  }
  getPasswordError() {

      if (this.password.hasError('required')) {
          return 'You must enter a value';
      }

    return this.password.hasError('password') ? '' : 'Not a valid password';


  }
  getPhoneError() {

      if (this.phone.hasError('required')) {
          return 'You must enter a value';
      }

      return this.phone.hasError('phone') ? '' : 'Not a valid Phone Number';


  }

  resetAll()
  {
      alert('Name: ' +this.name.value+'\n Email: '+this.email.value +'\nPhone: '+this.phone.value +'\n Address: '+ this.address.value);

      this.name.reset();
      this.address.reset();
      this.password.reset();
      this.phone.reset();
      this.email.reset();
  }

    protected readonly FormControl = FormControl;
}
