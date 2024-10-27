import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as choirData from '../../../data.json';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'search',
    standalone: true,
    imports: [TableModule, FormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
  })
  export class SearchGroups implements OnInit {
    importedData: any[] = choirData.choruses;
    @Input() reorganizedData: any[] = [];
    // citySearchControl = new FormControl('');
    inputCity = '';
    inputState = '';
    search() {
      console.log(this.inputCity)
    }
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
  }