import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as choirData from '../../../data.json';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'search',
    standalone: true,
    imports: [TableModule, FormsModule, CommonModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
  })
  export class SearchGroups implements OnInit {
    importedData: any[] = choirData.choruses;
    @Input() reorganizedData: any[] = [];
    inputCity = '';
    inputState = '';
    @Input() filteredData: any[] = [];
    results = false
    noResults = false
    search() {
      this.filteredData = []
      console.log(this.inputCity, this.inputState)
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
      console.log(this.filteredData)
      if(this.filteredData.length === 0) {
        this.noResults = true
        this.results = false
      } else {
        this.results = true
        this.noResults = false
      }
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