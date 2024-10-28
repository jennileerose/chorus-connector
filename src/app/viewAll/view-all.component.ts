import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as ChoirData from '../../../data.json';
import { organizeDataForTables } from '../utils';

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
      this.savedData = organizeDataForTables(this.choirData)
    }
  }