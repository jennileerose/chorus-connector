import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TableModule } from 'primeng/table';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPencilSquareSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';
import * as ChoirData from '../../../data.json';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-manage-data',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, DialogModule, NgIconComponent],
  templateUrl: './manage-data.component.html',
  styleUrl: './manage-data.component.scss',
  providers: [provideIcons({ heroPencilSquareSolid, heroTrashSolid })],
})
export class ManageDataComponent implements OnInit{
  // this checks if the user is logged in and pulls in the choir "database"
  constructor(public authService: AuthService, private router: Router){}
  // Set up for editing or deleting data
  choirData = ChoirData.choruses
  newChoirData: any[] = []
  editID = '';
  editName = '';
  editDescription = '';
  editContactEmail = '';
  editCity = '';
  editState = '';
  @Input() editFormVisible = false;
  @Input() tableVisible = true;
  @Input() reorganizedData: any[] = [];
  // On Init, re-orgnaize the choir data for easier access in the table
  ngOnInit() {
    this.choirData.forEach((choir) => {
      this.reorganizedData.push({
        id: choir.id,
        name: choir.name,
        description: choir.description,
        contactEmail: choir.contactEmail,
        locationCity: choir.location.city,
        locationState: choir.location.state
      })
    })
  }
  // hides the data table and shows the edit form
  editChoirInformationModal(id: string) {
    this.editFormVisible = true;
    this.tableVisible = false;
    this.reorganizedData.forEach((group) => {
      if(group.id === id) {
        this.editID = group.id
        this.editName = group.name;
        this.editDescription = group.description;
        this.editContactEmail = group.contactEmail;
        this.editCity = group.locationCity;
        this.editState = group.locationState
      }
    })
  }
  // Saves the edits for and prompts for downloading the new data file
  editChoirInformation(id: string) {
      this.reorganizedData.forEach((group) => {
      if(group.id === id) {
        this.newChoirData.push({
          id: id,
          name: this.editName,
          description: this.editDescription,
          contactEmail: this.editContactEmail,
          location: {
            city: this.editCity,
            state: this.editState
          }
        })
      } else {
        this.newChoirData.push({
          id: group.id,
          name: group.name,
          description: group.description,
          contactEmail: group.contactEmail,
          location: {
            city: group.locationCity,
            state: group.locationState
          }
        })
      }
    })
    this.choirData = this.newChoirData
    const jsonData = JSON.stringify({choruses: this.newChoirData})
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    this.router.navigate(['/view-all']);
    this.newChoirData = []
  }
  //cancels the edit form without changing anything
  cancel() {
    this.editFormVisible = false;
    this.tableVisible = true;
    this.editID = '';
    this.editName = '';
    this.editDescription = '';
    this.editContactEmail = '';
    this.editCity = '';
    this.editState = '';
  }
  // deletes selected choir and prompts downloading the new data file
  deleteChoirInformation(id: string, name: string) {
    if(confirm('Are you sure you want to delete ' + name + ' ?')) {
      this.reorganizedData.forEach((choir) => {
        if(choir.id !== id) {
          this.newChoirData.push({
            id: choir.id,
            name: choir.name,
            description: choir.description,
            contactEmail: choir.contactEmail,
            location: {
              city: choir.locationCity,
              state: choir.locationState
            }
          })
        }
      })
      this.choirData = this.newChoirData
      const jsonData = JSON.stringify({choruses: this.newChoirData})
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.json';
      a.click();
      this.router.navigate(['/view-all']);
      this.newChoirData = []
    }
    
  }
}
