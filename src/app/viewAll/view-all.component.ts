import { Component, Input, OnInit } from '@angular/core';
import * as choirData from '../../../data.json';
import { TableModule } from 'primeng/table';


@Component({
    selector: 'view-all',
    standalone: true,
    imports: [TableModule],
    templateUrl: './view-all.component.html',
    styleUrl: './view-all.component.scss'
  })
  export class ViewAll implements OnInit {
    importedData: any[] = choirData.choruses;
    @Input() savedData: any[] = []
    ngOnInit() {
      this.importedData.forEach((choir) => {
        this.savedData.push({
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