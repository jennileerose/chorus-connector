import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as ChoirData from '../../../data.json';

@Component({
    selector: 'view-all',
    standalone: true,
    imports: [TableModule],
    templateUrl: './view-all.component.html',
    styleUrl: './view-all.component.scss'
  })
  export class ViewAll implements OnInit {
    choirData = ChoirData.choruses
    @Input() savedData: any[] = []
    ngOnInit() {
      this.choirData.forEach((choir) => {
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