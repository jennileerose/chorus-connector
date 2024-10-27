import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Logo } from './logo/logo.component'
import * as choirData from '../../data.json';
import { ChorusDataForTable } from './types';
import { ViewAll } from './viewAll/view-all.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Logo,
    CommonModule,
    ViewAll],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chorus-connector';
  data: any[] = choirData.choruses;
  @Input() savedData: ChorusDataForTable[] = []
  ngOnInit() {
    this.data.forEach((choir) => {
      this.savedData.push({
        id: choir.id,
        name: choir.name,
        description: choir.description,
        contactEmail: choir.contactEmail,
        locationCity: choir.location.city,
        locationState: choir.location.state
      })
    })
    // console.log(this.savedData)
  }
}
