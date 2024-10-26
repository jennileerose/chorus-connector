import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { SearchGroups } from "./navgation/navigation.component";
import { Navgation } from './navgation/navigation.component';
import { Logo } from './logo/logo.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navgation, Logo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chorus-connector';
}
