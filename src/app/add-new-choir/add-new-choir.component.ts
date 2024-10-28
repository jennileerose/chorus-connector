import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as ChoirData from '../../../data.json';
import { Router } from '@angular/router';
import { randomString } from '../utils';

@Component({
  selector: 'app-add-new-choir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-choir.component.html',
  styleUrl: './add-new-choir.component.scss'
})
export class AddNewChoirComponent{
  // this checks if the user is logged in and routing to management when the new choir is added
  constructor(public authService: AuthService, private router: Router){}
  
  importedChoirData: any[] = ChoirData.choruses;
  newChoirData: any[] = []
  newID = randomString(24)
  idFlag = false;
  inputName = '';
  inputDescription = '';
  inputContactEmail = '';
  inputLocationCity = '';
  inputLocationState = '';

  addNewChoir() {
    this.importedChoirData.forEach((choir) => {
      this.newChoirData.push(choir)
    })
    this.newChoirData.push({
      id: this.newID,
      name: this.inputName,
      description: this.inputDescription,
      contactEmail: this.inputContactEmail,
      location: {
        city: this.inputLocationCity,
        state: this.inputLocationState
      }
    })
    this.importedChoirData = this.newChoirData
    const jsonData = JSON.stringify({choruses: this.newChoirData})
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    this.router.navigate(['/view-all']);
  }
}
