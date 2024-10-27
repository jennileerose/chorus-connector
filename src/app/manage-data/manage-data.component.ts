import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TableModule } from 'primeng/table';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPencilSquareSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-data',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, NgIconComponent],
  templateUrl: './manage-data.component.html',
  styleUrl: './manage-data.component.scss',
  providers: [provideIcons({ heroPencilSquareSolid, heroTrashSolid })],
})
export class ManageDataComponent implements OnInit{
  // this checks if the user is logged in and pulls in the choir "database"
  constructor(public authService: AuthService, private router: Router, public dataService: DataService){}

  newChoirData: any[] = []
  @Input() reorganizedData: any[] = [];
  ngOnInit() {
    this.dataService.choirData.forEach((choir) => {
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
    // this.reorganizedData.forEach((choir) => {

    // })
  }
  deleteChoirInformation(id: string, name: string) {
    if(confirm('Are you sure you want to delete ' + name + ' ?')) {
      console.log(id)
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
      this.dataService.choirData = this.newChoirData
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
}
