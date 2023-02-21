import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-showhidepassword',
  templateUrl: './showhidepassword.component.html',
  styleUrls: ['./showhidepassword.component.scss'],
})
export class ShowhidepasswordComponent  {

  showPassword = false;

  @ContentChild(IonInput)
  input!: IonInput;

  constructor() { }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

}
