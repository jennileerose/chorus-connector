import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import * as ChoirData from '../../../data.json';
import { organizeDataForTables } from '../utils';

@Component({
    selector: 'search',
    standalone: true,
    imports: [TableModule, FormsModule, CommonModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
  })
  export class SearchGroups implements OnInit {

    choirData = ChoirData.choruses
    @Input() reorganizedData: any[] = [];
    inputCity = '';
    inputState = '';
    @Input() filteredData: any[] = [];
    results = false
    noResults = false

    ngOnInit() {
      this.reorganizedData = organizeDataForTables(this.choirData)
    }

    search() {
      this.filteredData = []
      this.reorganizedData.forEach((choir) => {
        if(choir.locationCity === this.inputCity && choir.locationState === this.inputState) {
          this.filteredData.push({
            id: choir.id,
            name: choir.name,
            description: choir.description,
            contactEmail: choir.contactEmail,
            locationCity: choir.locationCity,
            locationState: choir.locationState
          })
        }
      })
      if(this.filteredData.length === 0) {
        this.noResults = true
        this.results = false
      } else {
        this.results = true
        this.noResults = false
      }
    }
  }