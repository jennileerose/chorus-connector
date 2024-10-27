import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DataService } from '../data.service';


@Component({
    selector: 'view-all',
    standalone: true,
    imports: [TableModule],
    templateUrl: './view-all.component.html',
    styleUrl: './view-all.component.scss'
  })
  export class ViewAll implements OnInit {
    constructor(public dataService: DataService){}
    @Input() savedData: any[] = []
    ngOnInit() {
      this.dataService.choirData.forEach((choir) => {
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