import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Navgation } from './navgation/navigation.component';
import { Logo } from './logo/logo.component'
import * as choirData from '../../data.json';
import { Chorus } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Logo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chorus-connector';
  data: any[] = choirData.choruses;
  savedData: Chorus[] = []
  ngOnInit() {
    this.data.forEach((choir) => {
      this.savedData.push({
        id: choir.id,
        name: choir.name,
        description: choir.description,
        contactEmail: choir.contactEmail,
        location: {
          city: choir.location.city,
          state: choir.location.state
        }
      })
    })
    console.log(this.savedData)
  }
}
