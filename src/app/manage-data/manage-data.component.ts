import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as choirData from '../../../data.json';
import { TableModule } from 'primeng/table';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPencilSquareSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-manage-data',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, NgIconComponent],
  templateUrl: './manage-data.component.html',
  styleUrl: './manage-data.component.scss',
  providers: [provideIcons({ heroPencilSquareSolid, heroTrashSolid })],
})
export class ManageDataComponent implements OnInit{

  constructor(public authService: AuthService){}

  // This block pulls in the choir "database"
  inputName = '';
  inputDescription = '';
  inputContactEmail = '';
  inputLocationCity = '';
  inputLocationState = '';
  importedData: any[] = choirData.choruses;
  @Input() reorganizedData: any[] = [];
  ngOnInit() {
    this.importedData.forEach((choir) => {
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
  editChoirInformation(id: string) {
    console.log(id)
  }
  deleteChoirInformation(id: string) {
    console.log(id)
  }
  addNewChoir() {

  }
}
